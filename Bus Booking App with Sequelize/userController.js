const { User } = require('../models/users');  


const addEntries = async (req, res) => {
    try {
        const { name, email } = req.body;
        
        const newUser = await User.create({
            name,
            email
        });
        
        res.status(201).send(`User ${newUser.name} added successfully`);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error adding the user");
    }
};

// Get all users
const getEntries = async (req, res) => {
    try {
        const users = await User.findAll();
        
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error fetching users");
    }
};

module.exports = {
    addEntries,
    getEntries
};
