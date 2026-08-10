/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */


const scores: number[] = [
    82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
];

const nilaiKelulusan: number = 75;

let totalNilai: number = 0;
let jumlahLulus: number = 0;
let jumlahGagal: number = 0;

for (let i = 0; i < scores.length; i++) {
  const nilai: number = scores[i];
totalNilai += nilai;
if (nilai >= nilaiKelulusan) {
    jumlahLulus++;
  } else {
    jumlahGagal++;
  }
}

const rataRataNilai: number = totalNilai / scores.length;

console.log(`Jumlah Siswa       : ${scores.length}`);
console.log(`Total Nilai        : ${totalNilai}`);
console.log(`Rata-rata Nilai    : ${rataRataNilai.toFixed(2)}`);
console.log(`Jumlah Lulus       : ${jumlahLulus} siswa`);
console.log(`Jumlah Gagal       : ${jumlahGagal} siswa`);