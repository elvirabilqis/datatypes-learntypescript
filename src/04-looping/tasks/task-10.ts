/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let jumlahMengumpulkan: number = 0;
let jumlahTidakMengumpulkan: number = 0;
let jumlahLulus: number = 0;
let jumlahRevisi: number = 0;
let totalNilai: number = 0;

const siswaTidakMengumpulkan: string[] = [];
const siswaRevisi: string[] = [];
const nilaiKelulusan: number = 75;

for (let i = 0; i < submissions.length; i++) {
const data = submissions[i];

totalNilai += data.score;

if (data.submitted) {
    jumlahMengumpulkan++;

if (data.score >= nilaiKelulusan) {
jumlahLulus++;
} else {
jumlahRevisi++;
siswaRevisi.push(data.student);
}
} else {
jumlahTidakMengumpulkan++;
siswaTidakMengumpulkan.push(data.student);
  }
}
const rataRataKelas: number = totalNilai / submissions.length;

console.log(`Total Siswa                : ${submissions.length} siswa`);
console.log(`Mengumpulkan Tugas         : ${jumlahMengumpulkan} siswa`);
console.log(`Tidak Mengumpulkan Tugas   : ${jumlahTidakMengumpulkan} siswa`);
console.log(`Lulus                      : ${jumlahLulus} siswa`);
console.log(`Perlu Revisi               : ${jumlahRevisi} siswa`);
console.log(`Nama Tidak Mengumpulkan    : ${siswaTidakMengumpulkan.join(", ")}`);
console.log(`Nama Perlu Revisi          : ${siswaRevisi.join(", ")}`);
console.log(`Rata-rata Nilai Kelas      : ${rataRataKelas.toFixed(2)}`);