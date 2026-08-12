/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(attendanceArray: { name: string; present: boolean }[]): void {
  let totalHadir: number = 0;
  let totalTidakHadir: number = 0;
  const siswaTidakHadir: string[] = [];

  for (let i = 0; i < attendanceArray.length; i++) {
    const siswa = attendanceArray[i];

    if (siswa.present) {
      totalHadir++;
    } else {
      totalTidakHadir++;
      siswaTidakHadir.push(siswa.name);
    }
  }
console.log("===== Attendance Report =====");
console.log(`Total Present : ${totalHadir}`);
console.log(`Total Absent  : ${totalTidakHadir}`);
console.log(`Absent Students: ${siswaTidakHadir.join(", ")}`);
console.log("==============================");
}
printAttendanceReport(attendances);