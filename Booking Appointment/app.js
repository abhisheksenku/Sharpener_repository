const express = require('express');
const path = require('path');
const sequelize = require('./utilities/sql');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}).catch(err => {
  console.error("DB sync failed:", err);
});
