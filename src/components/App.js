import React, { useState } from "react";
import "./App.css";

function App() {
  const menuData = [
    {
      id: 1,
      name: "Pancakes",
      category: "Breakfast",
      price: "₹150",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Omelette",
      category: "Breakfast",
      price: "₹120",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Veg Biryani",
      category: "Lunch",
      price: "₹200",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Fried Rice",
      category: "Lunch",
      price: "₹180",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Chocolate Shake",
      category: "Shakes",
      price: "₹100",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Strawberry Shake",
      category: "Shakes",
      price: "₹110",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [menuItems, setMenuItems] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);
    const filtered = menuData.filter(
      (item) => item.category === category
    );
    setMenuItems(filtered);
  };

  return (
    <div id="main">
      <h1>Menu</h1>

      <div className="button-container">
        <button
          id="filter-btn-1"
          onClick={() => filterItems("Breakfast")}
        >
          Breakfast
        </button>

        <button
          id="filter-btn-2"
          onClick={() => filterItems("Lunch")}
        >
          Lunch
        </button>

        <button
          id="filter-btn-3"
          onClick={() => filterItems("Shakes")}
        >
          Shakes
        </button>
      </div>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            data-test-id={`menu-item-${item.category.toLowerCase()}`}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


