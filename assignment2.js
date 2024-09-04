const students = [
    {name: 'emeka', age: 20, grade: 'A'},
    {name: 'obinna', age: 22, grade: 'B'},
    {name: 'precious', age: 19, grade: 'A'},
    {name: 'stanley', age: 21, grade: 'C'},
    {name: 'favour', age: 18, grade: 'B'}
];

const filterByGrade = (students, grade) => {
     return students.filter(student => student.grade === grade);
};

const matchedStudents = filterByGrade(students, 'A');
console.log(matchedStudents);

const averageAge = (students) => {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

const avgAge = averageAge(students);
console.log(avgAge);