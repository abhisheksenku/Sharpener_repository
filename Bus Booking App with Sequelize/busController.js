const { Bus } = require('../models/buses');  


const addEntries = async (req, res) => {
    try {
        const { busName, totalSeats, availableSeats } = req.body;
        
        const newBus = await Bus.create({
            busName,
            totalSeats,
            availableSeats
        });
        
        res.status(201).send(`Bus ${newBus.busName} added successfully`);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error adding the bus");
    }
};


const getAvailableBuses = async (req, res) => {
    const { seats } = req.params;

    try {
        const availableBuses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Sequelize.Op.gt]: seats 
                }
            }
        });
        
        if (availableBuses.length === 0) {
            return res.status(404).send("No available buses found");
        }
        
        res.status(200).json(availableBuses);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error fetching available buses");
    }
};

module.exports = {
    addEntries,
    getAvailableBuses
};
