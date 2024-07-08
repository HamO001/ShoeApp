const express = require('express');
const cors = require('cors');
const path = require('path');
const menuItems = require('./src/helpers/db.json'); // Adjust path if needed

const app = express();
const PORT = 3004;

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'src/assets'))); // Serve static files from 'assets' directory

app.get('/menuList/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  const menuItem = menuItems.find(item => item.id === id);
  if (menuItem) {
    res.json(menuItem);
  } else {
    res.status(404).send('Menu item not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
