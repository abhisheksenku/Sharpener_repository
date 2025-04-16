
const db = require('../utilities/sql');
const Student = require('../models/students');
const Identity = require('../models/identity');

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
const addEntries =async (req,res)=>{
    try {
        const {email,name} = req.body;
        const student = await Student.create({
            email:email,
            name:name
        })
        res.status(201).send(`User with name: ${name} is created`);
    } catch (error) {
        res.status(500).send("Unable to make a entry");
    }
    
    // const insertQuery = 'INSERT INTO students(email,name) VALUES(?,?)';

    // db.execute(insertQuery,[email,name],(err)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     console.log('Value has been added');
    //     res.status(200).send(`Student withname ${name} successfully added`);
    // })
}

const addingValuesToStudentAndIdentityTable = async(req,res)=>{
    try {
        const student = await Student.create(req.body.student);
        const idCard = await Identity.create({
            ...req.body.Identity,
            StudentId:student.id
        })
        res.status(201).json({student,idCard});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const updateEntry = async (req,res)=>{
    try {
        const {id} = req.params;
        const {name} = req.body;
        const student = await Student.findByPk(id);
        if(!student){
            res.status(404).send("User is not found");
        }
        student.name = name;
        await student.save();
        res.status(200).send("User has been updated");
    } catch (error) {
        res.status(500).send("User cannot be found");
    }

    // const updateQuery = "UPDATE students set name =? WHERE ID= ?";
    // db.execute(updateEntry,[name,id],(err,results)=>{
    //     if(err){
    //         console.log(err.message)
    //             res.status(500).send(err.message);
    //             db.end();
    //             return;
    //     }
    //     if(results.affectedRows === 0){
    //         res.status(404).send("Student not found");
    //         return;
    //     }
    //     res.status(200).send("User has been updated");
    // })
}
const deleteEntry = async (req,res)=>{
    const{id} = req.params;
    try {
        const {id} = req.params;
        const student = await Student.destroy({
            where:{
                id:id
            }
        })
        if(!student){
            res.status(404).send('User is not found');
        }
        res.status(200).send('User is deleted');
    } catch (error) {
        console.log(err);
        res.status(500).send('Error encountered while deleting');
    }
    // const deleteQuery = 'DELETE FROM students WHERE id=?';
    // db.execute(deleteQuery,[id],(err,results)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //     }
    //     if(results.affectedRows===0){
    //         res.status(400).send('Student is not found');
    //         return;
    //     }
    //     res.status(200).send(`User with ${id} is deleted`);
    // })
}
module.exports= {
    getEntries,
    addEntries,
    updateEntry,
    deleteEntry,
    addingValuesToStudentAndIdentityTable
}