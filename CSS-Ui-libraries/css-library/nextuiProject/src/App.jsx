import React from "react";
import AvatarComp from "./Components/Avatar";
import AccordionComp from "./Components/Accordion";
import SwitchComp from "./Components/Switch";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-14 justify-center items-center">
      <div className="w-6/12 h-full flex flex-col gap-14 justify-center items-center">
        <AvatarComp />
        <br />
        <AccordionComp />
        <br />
        <SwitchComp />
      </div>
    </div>
  );
};

export default App;
