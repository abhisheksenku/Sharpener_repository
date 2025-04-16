// app.js
const express = require('express');
const db = require('./utilities/sql');
const expenseRoutes = require('./routes/expenseRoutes');
require('./models');

const app = express();
app.use(express.json());

app.use('/expenses', expenseRoutes);

db.sync({ force: false }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}).catch((err) => {
    console.error(err);
});
