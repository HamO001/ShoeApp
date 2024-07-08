import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';

const MenuItem = ({ id }) => {
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        const response = await fetch(`http://localhost:3004/menuList/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMenuItem(data);
      } catch (error) {
        console.error('Error fetching menu item:', error);
      }
    };

    fetchMenuItem();
  }, [id]);

  if (!menuItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="menu-item">
      <img src={`http://localhost:3004/assets/${menuItem.image}`} alt={menuItem.name} />
      <div>
        <h2>{menuItem.name}</h2>
        <p>${menuItem.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
