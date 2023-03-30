  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);


// Using map()
const multByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

const map2Results = nums.map(i => i * 2);
console.log(map2Results);


// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});
console.log(simplified);


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  
const studentsWithIds = students.map(student => [student.id, student.name]);
console.log(studentsWithIds);

const studentsWithIds2 = students.map(student => ({id: student.id, name: student.name}));
console.log(studentsWithIds2);

const studentsWithIds3 = students.map(student => {
    const {id, name} = student;
    return {id, name};
});
console.log(studentsWithIds3);

const studentsWithIds4 = students.map(({id, name}) => ({id, name}));
console.log(studentsWithIds4);

age = [20, 21, 22];
const studentsWithIds5 = students.map(student => ({...student, age: age[student.id - 1]}));
console.log(studentsWithIds5);