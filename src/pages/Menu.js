import React from 'react';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menuList">
        {[1, 2, 3, 4, 5, 6].map(id => (
          <MenuItem key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
