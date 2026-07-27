/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
    studentID: string;
    fullName: string;
    gradeLevel: string;
    courseID: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registration1 : Registration = {
    studentID: "ST2026045",
    fullName: "Kanaya Indah",
    gradeLevel: "12th Grade",
    courseID: "CS101",
    courseTitle: "Introduction to Programming",
    instructorName: "Dr. John Smith",
    totalLearningHours: 40,
    registrationDate: "2024-06-01",
    isPaymentCompleted: true
};

const registation2 : Registration = {
    studentID: "ST2026046",
    fullName: "Mahendra Gunawan",
    gradeLevel: "11th Grade",
    courseID: "CS102",
    courseTitle: "Data Structures and Algorithms",  
    instructorName: "Prof. Jane Doe",
    totalLearningHours: 60,
    registrationDate: "2024-06-02",
    isPaymentCompleted: false
};

const registration3 : Registration = {
    studentID: "ST2026047",
    fullName: "Arsyilla Putri",
    gradeLevel: "12th Grade",
    courseID: "CS103",
    courseTitle: "Web Development",
    instructorName: "Dr. Emily Johnson",
    totalLearningHours: 50,
    registrationDate: "2024-06-03",
    isPaymentCompleted: true
};

console.log("=== Registration Information ===");
console.log("Registration 1:", registration1);
console.log("Registration 2:", registation2);
console.log("Registration 3:", registration3);
