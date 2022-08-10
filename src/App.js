import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import GlobalStyles from "./Components/styles/Global";
import { theme } from "./Components/styles/Theme";
function App() {
  const [screen, setScreen] = useState(window.innerWidth);
  useEffect(() => {
    const width = () => setScreen(window.innerWidth);
    window.removeEventListener("resize", width);
    window.addEventListener("resize", width, { passive: true });
    return () => window.removeEventListener("resize", width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header screen={screen} />
        <Main screen={screen}/>
        <Footer screen={screen} />
      </>
    </ThemeProvider>
  );
}

export default App;
