import React from "react";
import "./App.css";
import { useOnAuth } from "./hooks/useOnAuth";
import { UserContext } from "./hooks/useSession";
import AppRouter from "./router/AppRouter";
import { ThemeClassOnBody, ChangeThemeButton } from "./components/ThemedButton";
import { ThemeProvider } from "./hooks/useTheme";

const App: React.FC = () => {
  const [userDataState, loadingState] = useOnAuth();

  console.log(
    " *** App/userData from useOnAuth:",
    userDataState,
    loadingState.loading
  );

  // if (userDataState.userData === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <UserContext.Provider value={userDataState}>
      <ThemeProvider>
        <ThemeClassOnBody />
        <div className="App">
          <header className="App-header">
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
