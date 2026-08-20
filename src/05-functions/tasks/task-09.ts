/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

const patients = [
  { id: "PT001", name: "Alya", age: 17, department: "Pediatrics", admitted: true, bill: 850000 },
  { id: "PT002", name: "Budi", age: 45, department: "Cardiology", admitted: false, bill: 1200000 },
  { id: "PT003", name: "Citra", age: 68, department: "Cardiology", admitted: true, bill: 2500000 },
  { id: "PT004", name: "Dimas", age: 33, department: "Orthopedics", admitted: true, bill: 640000 },
  { id: "PT005", name: "Eka", age: 14, department: "Pediatrics", admitted: false, bill: 350000 }
];

type Patient = {
  id: string;
  name: string;
  age: number;
  department: string;
  admitted: boolean;
  bill: number;
};

function countTotalPatients(data: Patient[]): number {
  return data.length;
}

function countAdmittedPatients(data: Patient[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].admitted) {
      jumlah++;
    }
  }

  return jumlah;
}

function countDischargedPatients(data: Patient[]): number {
  let jumlah: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (!data[i].admitted) {
      jumlah++;
    }
  }

  return jumlah;
}

function countPatientsByDepartment(data: Patient[], department: string): number {
  let jumlah: number = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].department === department) {
      jumlah++;
    }
  }

  return jumlah;
}

function findHighestBill(data: Patient[]): number {
  let tertinggi: number = data[0].bill;

  for (let i = 0; i < data.length; i++) {
    if (data[i].bill > tertinggi) {
      tertinggi = data[i].bill;
    }
  }

  return tertinggi;
}

function findLowestBill(data: Patient[]): number {
  let terendah: number = data[0].bill;

  for (let i = 0; i < data.length; i++) {
    if (data[i].bill < terendah) {
      terendah = data[i].bill;
    }
  }

  return terendah;
}

function calculateTotalRevenue(data: Patient[]): number {
  let total: number = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].bill;
  }

  return total;
}

function calculateAverageBill(data: Patient[]): number {
  const totalRevenue: number = calculateTotalRevenue(data);
  return totalRevenue / data.length;
}

function getAdmittedPatientNames(data: Patient[]): string[] {
  const namaPasien: string[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].admitted) {
      namaPasien.push(data[i].name);
    }
  }

  return namaPasien;
}

function printHospitalReport(data: Patient[]): void {
  const totalPasien: number = countTotalPatients(data);
  const jumlahAdmitted: number = countAdmittedPatients(data);
  const jumlahDischarged: number = countDischargedPatients(data);
  const jumlahPediatrics: number = countPatientsByDepartment(data, "Pediatrics");
  const jumlahCardiology: number = countPatientsByDepartment(data, "Cardiology");
  const jumlahOrthopedics: number = countPatientsByDepartment(data, "Orthopedics");
  const tertinggi: number = findHighestBill(data);
  const terendah: number = findLowestBill(data);
  const rataRata: number = calculateAverageBill(data);
  const totalPendapatan: number = calculateTotalRevenue(data);
  const namaAdmitted: string[] = getAdmittedPatientNames(data);

  console.log("===== Hospital Daily Report =====");
  console.log(`Total Patients            : ${totalPasien}`);
  console.log(`Admitted Patients         : ${jumlahAdmitted}`);
  console.log(`Discharged Patients       : ${jumlahDischarged}`);
  console.log(`Pediatrics Department     : ${jumlahPediatrics} pasien`);
  console.log(`Cardiology Department     : ${jumlahCardiology} pasien`);
  console.log(`Orthopedics Department    : ${jumlahOrthopedics} pasien`);
  console.log(`Highest Bill              : Rp${tertinggi.toLocaleString("id-ID")}`);
  console.log(`Lowest Bill               : Rp${terendah.toLocaleString("id-ID")}`);
  console.log(`Average Bill              : Rp${rataRata.toLocaleString("id-ID")}`);
  console.log(`Total Revenue             : Rp${totalPendapatan.toLocaleString("id-ID")}`);
  console.log(`Admitted Patient Names    : ${namaAdmitted.join(", ")}`);
  console.log("===================================");
}
printHospitalReport(patients);