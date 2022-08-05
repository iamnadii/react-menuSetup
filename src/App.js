import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterData = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newData = items.filter((data) => data.category === category);
    setMenuItems(newData);
  };
  return (
    <main>
      <div className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
      </div>
      <Categories category={categories} filterData={filterData} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
