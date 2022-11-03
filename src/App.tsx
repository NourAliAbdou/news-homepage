import React from "react";
import { useMediaQuery } from "react-responsive";
import { Header, Section1, Section2 } from "./components";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <div className={isTabletOrMobile ? "p-4" : "px-32 py-10 "}>
      <Header />

      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
