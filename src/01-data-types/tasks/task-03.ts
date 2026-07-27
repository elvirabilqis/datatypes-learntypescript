/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */


type Student = {
    studentID: string;
    fullName: string;
    age: number;
    isActive: boolean;
};

const student1 : Student = {
    studentID: "ST2026045",
    fullName: "Nadia Putri",
    age: 17,
    isActive: true
};

const Student2 : Student = {
    studentID: "ST2026046",
    fullName: "Rizky Pratama",
    age: 18,
    isActive: true
};

const student3 : Student = {
    studentID: "ST2026047",
    fullName: "Siti Aisyah",
    age: 17,
    isActive: false
};

console.log("=== Student Information ===");
console.log("Student 1:", student1);
console.log("Student 2:", Student2);
console.log("Student 3:", student3);
