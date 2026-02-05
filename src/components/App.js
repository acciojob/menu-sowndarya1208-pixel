import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

function App() {
  const data = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: "₹150" },
    { id: 2, name: "Omelette", category: "Breakfast", price: "₹120" },
    { id: 3, name: "Biryani", category: "Lunch", price: "₹200" },
    { id: 4, name: "Fried Rice", category: "Lunch", price: "₹180" },
    { id: 5, name: "Chocolate Shake", category: "Shakes", price: "₹100" },
    { id: 6, name: "Strawberry Shake", category: "Shakes", price: "₹110" }
  ];

  const [menuItems, setMenuItems] = useState(data);

  const filterCategory = (category) => {
    const filtered =
      category === "All"
        ? data
        : data.filter((item) => item.category === category);

    setMenuItems(filtered);
  };

  return (
    <div id="main">
      <h1>Menu</h1>

      <button id="filter-btn-1" onClick={() => filterCategory("Breakfast")}>
        Breakfast
      </button>

      <button id="filter-btn-2" onClick={() => filterCategory("Lunch")}>
        Lunch
      </button>

      <button id="filter-btn-3" onClick={() => filterCategory("Shakes")}>
        Shakes
      </button>

      <Menu items={menuItems} />
    </div>
  );
}

export default App;
