const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser };
