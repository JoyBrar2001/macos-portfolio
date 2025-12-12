import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome } from "#components";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
}

export default App;