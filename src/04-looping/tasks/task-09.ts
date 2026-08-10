/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let jumlahA: number = 0;
let jumlahB: number = 0;
let jumlahC: number = 0;
let jumlahD: number = 0;
let totalNilai: number = 0;
let nilaiTertinggi: number = students[0].score;
let nilaiTerendah: number = students[0].score;

for (let i = 0; i < students.length; i++) {
  const mahasiswa = students[i];
  const nilai: number = mahasiswa.score;

  totalNilai += nilai;

  if (nilai > nilaiTertinggi) {
    nilaiTertinggi = nilai;
  }

  if (nilai < nilaiTerendah) {
    nilaiTerendah = nilai;
  }

  if (nilai >= 90) {
    jumlahA++;
  } else if (nilai >= 80) {
    jumlahB++;
  } else if (nilai >= 70) {
    jumlahC++;
  } else {
    jumlahD++;
  }
}
const rataRataNilai: number = totalNilai / students.length;

console.log(`Total Mahasiswa      : ${students.length} orang`);
console.log(`Grade A (90-100)     : ${jumlahA} orang`);
console.log(`Grade B (80-89)      : ${jumlahB} orang`);
console.log(`Grade C (70-79)      : ${jumlahC} orang`);
console.log(`Grade D (<70)        : ${jumlahD} orang`);
console.log(`Nilai Tertinggi      : ${nilaiTertinggi}`);
console.log(`Nilai Terendah       : ${nilaiTerendah}`);
console.log(`Rata-rata Nilai      : ${rataRataNilai.toFixed(2)}`);