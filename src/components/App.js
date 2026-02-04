import React, { useState } from "react";
import "./App.css";

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
    const filteredItems = data.filter(
      (item) => item.category === category
    );
    setMenuItems(filteredItems);
  };

  return (
    <div id="main">
      <h1>Menu</h1>

      <div>
        <button id="filter-btn-1" onClick={() => filterCategory("Breakfast")}>
          Breakfast
        </button>

        <button id="filter-btn-2" onClick={() => filterCategory("Lunch")}>
          Lunch
        </button>

        <button id="filter-btn-3" onClick={() => filterCategory("Shakes")}>
          Shakes
        </button>
      </div>

      <div>
        {menuItems.map((item) => (
          <div
            key={item.id}
            data-test-id={`menu-item-${item.category.toLowerCase()}`}
          >
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
