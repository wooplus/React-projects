import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  let [menu, setMenu] = useState(items);
  let [category, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log(category);
    if (category === "all") {
      setMenu(items);
      return;
    }
    let newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenu(newItems);
  };

  return (
    <main>
      <section className="menu">
        <h3 className="title">Our menu</h3>
        <div className="underline"></div>
        <Categories category={category} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
