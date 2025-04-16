const { unlock } = require('../routes/studentRoutes');
const db = require('../utilities/sql');
const getEntries = (req,res)=>{
    const getQuery = 'SELECT * FROM students';
    db.execute(getQuery,(err,results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).json(results);
    })
}
const addEntries = (req,res)=>{
    const {email,name} = req.body;
    const insertQuery = 'INSERT INTO students(email,name) VALUES(?,?)';

    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log('Value has been added');
        res.status(200).send(`Student withname ${name} successfully added`);
    })
}
const updateEntry = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = "UPDATE students set name =? WHERE ID= ?";
    db.execute(updateEntry,[name,id],(err,results)=>{
        if(err){
            console.log(err.message)
                res.status(500).send(err.message);
                db.end();
                return;
        }
        if(results.affectedRows === 0){
            res.status(404).send("Student not found");
            return;
        }
        res.status(200).send("User has been updated");
    })
}
const deleteEntry = (req,res)=>{
    const{id} = req.params;
    const deleteQuery = 'DELETE FROM students WHERE id=?';
    db.execute(deleteQuery,[id],(err,results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
        }
        if(results.affectedRows===0){
            res.status(400).send('Student is not found');
            return;
        }
        res.status(200).send(`User with ${id} is deleted`);
    })
}
module.exports= {
    getEntries,
    addEntries,
    updateEntry,
    deleteEntry
}