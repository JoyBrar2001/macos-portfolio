import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome } from "#components";
import { Contact, Finder, Image, Resume, Safari, Terminal, Text } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Contact />
      <Finder />
      <Image />
      <Resume />
      <Safari />
      <Terminal />
      <Text />
    </main>
  );
}

export default App;