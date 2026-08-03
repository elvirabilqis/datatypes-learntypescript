/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */


const applicant: string = "Andi Wijaya";
const monthlyIncome: number = 10000000;
const creditScore: number = 725;
const existingDebt: number = 2500000;
const permanentEmployee: boolean = true;
let loanDecision: string = "";

const lolosTahap1: boolean = monthlyIncome >= 8000000 && creditScore >= 700;

if (lolosTahap1) {
  
  const maximumdebtLimit: number = monthlyIncome * 0.3;
  const eligibleDebt: boolean = existingDebt <= maximumdebtLimit;

  const lolosTahap2: boolean = eligibleDebt && permanentEmployee === true;

if (lolosTahap2) {
    loanDecision = "Loan Approved";
  } else {
    loanDecision = "Manual Review";
  }
} else {
  loanDecision = "Loan Rejected";
}

console.log(`Nama Pemohon       : ${applicant}`);
console.log(`Pendapatan Bulanan : Rp${monthlyIncome.toLocaleString("id-ID")}`);
console.log(`Skor Kredit        : ${creditScore}`);
console.log(`Hutang Saat Ini    : Rp${existingDebt.toLocaleString("id-ID")}`);
console.log(`Karyawan Tetap     : ${permanentEmployee ? "Ya" : "Tidak"}`);
console.log(`Keputusan Pinjaman : ${loanDecision}`);