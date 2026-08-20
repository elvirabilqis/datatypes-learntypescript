/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
  { student: "Alya", course: "TypeScript", completed: true, score: 91, duration: 38 },
  { student: "Budi", course: "TypeScript", completed: false, score: 45, duration: 12 },
  { student: "Citra", course: "Database", completed: true, score: 87, duration: 42 },
  { student: "Dimas", course: "Backend", completed: true, score: 96, duration: 40 },
  { student: "Eka", course: "Database", completed: false, score: 60, duration: 18 },
  { student: "Fajar", course: "Backend", completed: true, score: 82, duration: 35 },
  { student: "Gita", course: "TypeScript", completed: true, score: 88, duration: 36 },
  { student: "Hana", course: "Backend", completed: false, score: 70, duration: 20 }
];

type Enrollment = {
  student: string;
  course: string;
  completed: boolean;
  score: number;
  duration: number;
};

const PASSING_SCORE: number = 75;

function countTotalEnrollments(data: Enrollment[]): number {
  return data.length;
}

function countCompletedEnrollments(data: Enrollment[]): number {
  let jumlah: number = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].completed) jumlah++;
  }
  return jumlah;
}

function countIncompleteEnrollments(data: Enrollment[]): number {
  let jumlah: number = 0;
  for (let i = 0; i < data.length; i++) {
    if (!data[i].completed) jumlah++;
  }
  return jumlah;
}

function calculateCompletionPercentage(data: Enrollment[]): number {
  const total: number = countTotalEnrollments(data);
  const completed: number = countCompletedEnrollments(data);
  return (completed / total) * 100;
}

function findHighestScore(data: Enrollment[]): number {
  let tertinggi: number = data[0].score;
  for (let i = 0; i < data.length; i++) {
    if (data[i].score > tertinggi) tertinggi = data[i].score;
  }
  return tertinggi;
}

function findLowestScore(data: Enrollment[]): number {
  let terendah: number = data[0].score;
  for (let i = 0; i < data.length; i++) {
    if (data[i].score < terendah) terendah = data[i].score;
  }
  return terendah;
}

function sumScores(data: Enrollment[]): number {
  let total: number = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].score;
  }
  return total;
}

function calculateAverageScore(data: Enrollment[]): number {
  const total: number = sumScores(data);
  return total / data.length;
}

function countPassingStudents(data: Enrollment[]): number {
  let jumlah: number = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].score >= PASSING_SCORE) jumlah++;
  }
  return jumlah;
}

function getUniqueCourses(data: Enrollment[]): string[] {
  const daftarKursus: string[] = [];
  for (let i = 0; i < data.length; i++) {
    if (!daftarKursus.includes(data[i].course)) {
      daftarKursus.push(data[i].course);
    }
  }
  return daftarKursus;
}

function getEnrollmentsByCourse(data: Enrollment[], course: string): Enrollment[] {
  const hasil: Enrollment[] = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].course === course) {
      hasil.push(data[i]);
    }
  }
  return hasil;
}

function countStudentsByCourse(data: Enrollment[], course: string): number {
  const kursusData: Enrollment[] = getEnrollmentsByCourse(data, course);
  return kursusData.length;
}

function calculateAverageScoreByCourse(data: Enrollment[], course: string): number {
  const kursusData: Enrollment[] = getEnrollmentsByCourse(data, course);
  return calculateAverageScore(kursusData);
}

function calculateTotalLearningHours(data: Enrollment[]): number {
  let total: number = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].duration;
  }
  return total;
}

function calculateAverageLearningDuration(data: Enrollment[]): number {
  const totalJam: number = calculateTotalLearningHours(data);
  return totalJam / data.length;
}

function printCompletionStatistics(data: Enrollment[]): void {
  const total: number = countTotalEnrollments(data);
  const completed: number = countCompletedEnrollments(data);
  const incomplete: number = countIncompleteEnrollments(data);
  const percentage: number = calculateCompletionPercentage(data);

  console.log("--- Completion Statistics ---");
  console.log(`Total Enrollments      : ${total}`);
  console.log(`Completed Enrollments  : ${completed}`);
  console.log(`Incomplete Enrollments : ${incomplete}`);
  console.log(`Completion Percentage  : ${percentage.toFixed(2)}%`);
}

function printAcademicStatistics(data: Enrollment[]): void {
  const highest: number = findHighestScore(data);
  const lowest: number = findLowestScore(data);
  const average: number = calculateAverageScore(data);
  const passing: number = countPassingStudents(data);

  console.log("--- Academic Statistics ---");
  console.log(`Highest Score          : ${highest}`);
  console.log(`Lowest Score           : ${lowest}`);
  console.log(`Average Score          : ${average.toFixed(2)}`);
  console.log(`Passing Students (>=${PASSING_SCORE}) : ${passing}`);
}

function printCourseStatistics(data: Enrollment[]): void {
  const daftarKursus: string[] = getUniqueCourses(data);

  console.log("--- Course Statistics ---");
  for (let i = 0; i < daftarKursus.length; i++) {
    const course: string = daftarKursus[i];
    const jumlahSiswa: number = countStudentsByCourse(data, course);
    const rataRata: number = calculateAverageScoreByCourse(data, course);

    console.log(`${course} - Students: ${jumlahSiswa}, Average Score: ${rataRata.toFixed(2)}`);
  }
}

function printLearningStatistics(data: Enrollment[]): void {
  const totalJam: number = calculateTotalLearningHours(data);
  const rataRataDurasi: number = calculateAverageLearningDuration(data);

  console.log("--- Learning Statistics ---");
  console.log(`Total Learning Hours   : ${totalJam} hours`);
  console.log(`Average Duration       : ${rataRataDurasi.toFixed(2)} hours`);
}

function printDashboard(data: Enrollment[]): void {
  console.log("===== Online Learning Platform Dashboard =====");
  printCompletionStatistics(data);
  printAcademicStatistics(data);
  printCourseStatistics(data);
  printLearningStatistics(data);
  console.log("================================================");
}

printDashboard(enrollments);