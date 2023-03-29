import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <>
      <h1 className="someClass">Hello World</h1>
      <ul>
        <li>
          <a href="https://github.com/vinothsmart/">Hi Vinoth</a>
        </li>
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />, root);
