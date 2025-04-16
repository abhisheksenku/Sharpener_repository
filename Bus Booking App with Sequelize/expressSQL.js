const express = require('express');
const db = require('./utilities/sql'); 
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/bus", busRoutes);


db.sync({ force: false })  
  .then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
