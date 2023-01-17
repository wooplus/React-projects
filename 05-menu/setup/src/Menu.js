import React from "react";

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((eachMenu) => {
        let { id, title, category, price, img, desc } = eachMenu;
        return (
          <article className="menu-item">
            <div>
              <img src={img} alt={title} className="photo" />
            </div>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
