import React from "react";

import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

// export default function Home() {
//   return (
//     <div className='demo'>
//       <h1>Home</h1>
//     </div>
//   )
// }

export default function Home() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { className: "demo", id: "ddemo2" }, "Home"),
    React.createElement("p",null,"lorem ipsum dolor sit amet")
  );
}

{
  /* <About />
      <Service />
      <Portfolio />
      <Contact /> */
}
