import { useState } from "react";
import Title from "./Title";
import menu from "./data";

const App = () => {
  const [menuItems, setMenuItems] = useState([menu]);
  return (
    <main>
      <section className="menu">
        <Title tite="our menu" />
      </section>
    </main>
  );
};
export default App;
