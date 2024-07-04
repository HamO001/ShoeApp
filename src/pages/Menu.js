import React from 'react';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-list">
        <MenuItem id={1} />
        <MenuItem id={2} />
        <MenuItem id={3} />
        <MenuItem id={4} />
        <MenuItem id={5} />
        <MenuItem id={6} />
        {/* Add more MenuItem components with different ids as needed */}
      </div>
    </div>
  );
};

export default Menu;