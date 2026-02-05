import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        let testId = "";

        if (item.category === "Breakfast") testId = "menu-item-breakfast";
        if (item.category === "Lunch") testId = "menu-item-lunch";
        if (item.category === "Shakes") testId = "menu-item-shakes";

        return (
          <div key={item.id} data-test-id={testId}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
