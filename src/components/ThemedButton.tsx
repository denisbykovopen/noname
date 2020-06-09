import React, { useCallback } from "react";
import Helmet from "react-helmet";
import { useTheme } from "../hooks/useTheme";

interface ChangeThemeProps {
  children: React.ReactElement | string;
  theme: string | null;
}

export const ChangeThemeButton = ({
  children,
  theme,
}: ChangeThemeProps): React.ReactElement => {
  const [currentTheme, setTheme] = useTheme();
  const changeTheme = useCallback(() => setTheme(theme), [theme, setTheme]);
  return (
    <button
      className={theme === currentTheme ? "active" : ""}
      onClick={changeTheme}
    >
      {children}
    </button>
  );
};

export const ThemeClassOnBody = (): React.ReactElement => {
  const [theme] = useTheme();
  return (
    <Helmet>
      <body className={theme} />
    </Helmet>
  );
};

// const App = () => (
//   <>
//     <ThemeClassOnBody />
//     <div className="App">
//       <ChangeThemeButton theme="dark">Dark theme</ChangeThemeButton>
//       <ChangeThemeButton theme="light">Light theme</ChangeThemeButton>
//     </div>
//   </>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   rootElement
// );
