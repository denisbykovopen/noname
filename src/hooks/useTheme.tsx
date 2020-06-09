import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";

const getMql = (): MediaQueryList =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

const getBrowserTheme = (): "dark" | "light" => {
  const mql = getMql();
  return mql && mql.matches ? "dark" : "light";
};

const onBrowserThemeChanged = (callback): any => {
  const mql = getMql();
  const mqlListener = (e: MediaQueryListEvent): "dark" | "light" =>
    callback(e.matches ? "dark" : "light");
  mql && mql.addListener(mqlListener);
  return (): void => mql && mql.removeListener(mqlListener);
};

const getLocalStorageTheme = (): any => {
  try {
    const localTheme = localStorage && localStorage.getItem("theme");
    if (localTheme && ["light", "dark"].includes(localTheme)) {
      return localTheme;
    }
  } catch (err) {
    console.warn("Can’t access local storage:", err.message);
  }
};

const setLocalStorageTheme = (theme: string): any => {
  try {
    localStorage && localStorage.setItem("theme", theme);
  } catch (err) {
    console.warn("Can’t write to local storage:", err.message);
  }
};

interface ThemeProps {
  theme: string;
  updateTheme: any;
}

const ThemeContext = createContext<any>({} as any);

interface ThemeProviderProps {
  children: React.ReactElement | React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps): any => {
  const [theme, setTheme] = useState<string | null>(null);

  const updateTheme = useCallback(
    (newTheme) => {
      if (typeof newTheme === "function") {
        setTheme((currentTheme) => {
          const actualNewTheme = newTheme(currentTheme);
          setLocalStorageTheme(actualNewTheme);
          return actualNewTheme;
        });
      } else {
        setLocalStorageTheme(newTheme);
        setTheme(newTheme);
      }
    },
    [setTheme]
  );

  useEffect(() => {
    if (theme === null) {
      setTheme(getLocalStorageTheme() || getBrowserTheme());
    }
    return onBrowserThemeChanged(updateTheme);
  }, [theme, updateTheme]);

  return (
    theme && (
      <ThemeContext.Provider value={[theme, updateTheme]}>
        {children}
      </ThemeContext.Provider>
    )
  );
};

export const useTheme = (): any => useContext(ThemeContext);
