import React, { useRef, MutableRefObject, RefObject } from "react";
import "./App.css";
import { useOnAuth } from "./hooks/useOnAuth";
import { UserContext } from "./hooks/useSession";
import AppRouter from "./router/AppRouter";
import { ThemeClassOnBody, ChangeThemeButton } from "./components/ThemedButton";
import { ThemeProvider } from "./hooks/useTheme";
import BurgerButton from "./components/BurgerButton";
import Menu from "./components/Menu";
import useOnClickOutside from "./hooks/useOnClickOutside";

const App: React.FC = () => {
  const [userDataState, loadingState] = useOnAuth();
  const [open, setOpen] = React.useState(false);
  console.log(
    " *** App/userData from useOnAuth:",
    userDataState,
    loadingState.loading
  );

  // if (userDataState.userData === null) {
  //   return <div>Loading...</div>;
  // }

  const node: MutableRefObject<HTMLDivElement | any> = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <UserContext.Provider value={userDataState}>
      <ThemeProvider>
        <ThemeClassOnBody />
        <div className="App">
          <header className="App-header">
            <div ref={node}>
              <BurgerButton open={open} setOpen={setOpen} />
              <Menu open={open} />
            </div>

            <ChangeThemeButton theme="dark">Dark theme</ChangeThemeButton>
            <ChangeThemeButton theme="light">Light theme</ChangeThemeButton>
          </header>
        </div>
        <AppRouter />
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
