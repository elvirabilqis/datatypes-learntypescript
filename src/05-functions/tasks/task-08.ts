/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

const submissions = [
  { student: "Alya", submitted: true, score: 90 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 84 },
  { student: "Dimas", submitted: true, score: 72 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 96 }
];

type Submission = {
  student: string;
  submitted: boolean;
  score: number;
};

const nilaiKelulusan: number = 75;

function countTotalStudents(data: Submission[]): number {
  return data.length;
}

function countSubmitted(data: Submission[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted) {
      jumlah++;
    }
  }

  return jumlah;
}

function countMissing(data: Submission[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (!data[i].submitted) {
      jumlah++;
    }
  }

  return jumlah;
}

function countPassed(data: Submission[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted && data[i].score >= nilaiKelulusan) {
      jumlah++;
    }
  }

  return jumlah;
}

function countNeedRevision(data: Submission[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].submitted && data[i].score < nilaiKelulusan) {
      jumlah++;
    }
  }

  return jumlah;
}

function calculateAverageScore(data: Submission[]): number {
  let total: number = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].score;
  }

  return total / data.length;
}

function findHighestScore(data: Submission[]): number {
  let tertinggi: number = data[0].score;

  for (let i = 0; i < data.length; i++) {
    if (data[i].score > tertinggi) {
      tertinggi = data[i].score;
    }
  }

  return tertinggi;
}

function findLowestScore(data: Submission[]): number {
  let terendah: number = data[0].score;

  for (let i = 0; i < data.length; i++) {
    if (data[i].score < terendah) {
      terendah = data[i].score;
    }
  }

  return terendah;
}

function printAssignmentReport(data: Submission[]): void {
  const totalSiswa: number = countTotalStudents(data);
  const jumlahSubmit: number = countSubmitted(data);
  const jumlahMissing: number = countMissing(data);
  const jumlahLulus: number = countPassed(data);
  const jumlahRevisi: number = countNeedRevision(data);
  const rataRata: number = calculateAverageScore(data);
  const tertinggi: number = findHighestScore(data);
  const terendah: number = findLowestScore(data);

  console.log("===== Assignment Submission Report =====");
  console.log(`Total Students        : ${totalSiswa}`);
  console.log(`Submitted             : ${jumlahSubmit}`);
  console.log(`Missing               : ${jumlahMissing}`);
  console.log(`Passed                : ${jumlahLulus}`);
  console.log(`Need Revision         : ${jumlahRevisi}`);
  console.log(`Average Score         : ${rataRata.toFixed(2)}`);
  console.log(`Highest Score         : ${tertinggi}`);
  console.log(`Lowest Score          : ${terendah}`);
  console.log("==========================================");
}

printAssignmentReport(submissions);