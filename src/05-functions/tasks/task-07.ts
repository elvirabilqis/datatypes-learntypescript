/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

type Student = {
  name: string;
  major: string;
  active: boolean;
};

function countActiveStudents(students: Student[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].active) {
      jumlah++;
    }
  }

  return jumlah;
}

function countInactiveStudents(students: Student[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < students.length; i++) {
    if (!students[i].active) {
      jumlah++;
    }
  }

  return jumlah;
}

function countStudentsByMajor(students: Student[], major: string): number {
  let jumlah: number = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].major === major) {
      jumlah++;
    }
  }

  return jumlah;
}

function printEnrollmentReport(students: Student[]): void {
  const totalMahasiswa: number = students.length;
  const jumlahAktif: number = countActiveStudents(students);
  const jumlahTidakAktif: number = countInactiveStudents(students);
  const jumlahSE: number = countStudentsByMajor(students, "Software Engineering");
  const jumlahNetworking: number = countStudentsByMajor(students, "Networking");
  const jumlahMultimedia: number = countStudentsByMajor(students, "Multimedia");

  console.log("===== University Enrollment Report =====");
  console.log(`Total Students            : ${totalMahasiswa}`);
  console.log(`Active Students           : ${jumlahAktif}`);
  console.log(`Inactive Students         : ${jumlahTidakAktif}`);
  console.log(`Software Engineering      : ${jumlahSE}`);
  console.log(`Networking                : ${jumlahNetworking}`);
  console.log(`Multimedia                : ${jumlahMultimedia}`);
  console.log("==========================================");
}

printEnrollmentReport(students);