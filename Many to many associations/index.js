const Student = require('./students');
const Identity = require('./identity');
const department = require('./departments');
const courses = require('./courses');
const studentCourses = require('./studentCourses')

Student.hasOne(Identity);
Identity.belongsTo(Student);

department.hasMany(Student);
Student.belongsTo(department);

Student.belongsToMany(courses,{through:studentCourses});
courses.belongsToMany(Student,{through:studentCourses});

module.exports={
    Student,
    Identity,
    courses,
    studentCourses
}