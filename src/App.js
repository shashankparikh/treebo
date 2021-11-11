import React from "react";
import { Provider } from "react-redux";
import { compose } from "redux";
import store from "./configureStore";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import InjectLoader from "./components/common/Loader/loader";
// Components Custom Hook
import { useDarkMode } from "./components/common/UseDarkMode/useDarkMode";
// Pages
import GifList from "./containers/App/gifList/index";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <GifList theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
//export default App;
