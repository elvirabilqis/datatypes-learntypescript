/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let jumlahHadir: number = 0;
let jumlahTidakHadir: number = 0;
const siswaTidakHadir: string[] = [];

for (let i = 0; i < attendances.length; i++) {
  const siswa = attendances[i];

  if (siswa.present) {
    jumlahHadir++;
  } else {
    jumlahTidakHadir++;
    siswaTidakHadir.push(siswa.name); 
  }
}
const persentaseKehadiran: number = (jumlahHadir / attendances.length) * 100;

console.log(`Total Siswa           : ${attendances.length} siswa`);
console.log(`Jumlah Hadir          : ${jumlahHadir} siswa`);
console.log(`Jumlah Tidak Hadir    : ${jumlahTidakHadir} siswa`);
console.log(`Nama Siswa Tidak Hadir: ${siswaTidakHadir.join(", ")}`);
console.log(`Persentase Kehadiran  : ${persentaseKehadiran.toFixed(2)}%`);