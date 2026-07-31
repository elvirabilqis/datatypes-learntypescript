/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

const namaSiswa: string = "Alya Putri";
const GPA: number = 3.89;
const pendapatanKeluarga: number = 4200000;
const jumlahKompetisi: number = 4;
const adaPelanggaran: boolean = false;
const dokumenLengkap: boolean = true;

const syaratGPA: boolean = GPA >= 3.75;
const syaratPendapatan: boolean = pendapatanKeluarga < 5000000;
const syaratKompetisi: boolean = jumlahKompetisi >= 3;
const syaratDisiplin: boolean = adaPelanggaran === false;
const syaratDokumen: boolean = dokumenLengkap === true;

const lolosBeasiswa: boolean = syaratGPA && syaratPendapatan && syaratKompetisi && syaratDisiplin && syaratDokumen;
const jumlahBeasiswa: number = lolosBeasiswa ? 12000000 : 0;
const totalBudget: number = 500000000;
const sisaBudget: number = totalBudget - jumlahBeasiswa;

console.log(`Nama Mahasiswa   : ${namaSiswa}`);
console.log(`Status Diterima  : ${lolosBeasiswa ? "DITERIMA" : "TIDAK DITERIMA"}`);
console.log(`Jumlah Beasiswa  : Rp${jumlahBeasiswa.toLocaleString("id-ID")}`);
console.log(`Sisa Budget      : Rp${sisaBudget.toLocaleString("id-ID")}`);