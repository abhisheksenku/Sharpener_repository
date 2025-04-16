const Student = require('./students');
const Identity = require('./identity');
const department = require('./departments');

Student.hasOne(Identity);
Identity.belongsTo(Student);

department.hasMany(Student);
Student.belongsTo(department);

module.exports={
    Student,
    Identity
}