/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

const studentName: string = "Nadia Putri";
const activeStudent: boolean = true;
const tuitionPaid: boolean = true;
const passedprogrammingFundamentals: boolean = true;
const passeddatabaseSystems: boolean = true;
const GPA: number = 3.45;
const seatsAvailable: boolean = false;
let registrationResults: string = "";

if (activeStudent && tuitionPaid) {

  if (passedprogrammingFundamentals && passeddatabaseSystems && GPA >= 3.20) {

    if (seatsAvailable) {
      registrationResults = "Registration Successful";
    } else {
      registrationResults = "Added to Waiting List";
    }
  } else {
    registrationResults = "Academic Requirements Not Met";
  }
} else {
  registrationResults = "Registration Rejected";
}


console.log(`Nama Mahasiswa   : ${studentName}`);
console.log(`Status Aktif     : ${activeStudent ? "Ya" : "Tidak"}`);
console.log(`SPP Lunas        : ${tuitionPaid ? "Ya" : "Tidak"}`);
console.log(`Prog. Fundamental: ${passedprogrammingFundamentals ? "Lulus" : "Tidak Lulus"}`);
console.log(`Database Systems : ${passeddatabaseSystems ? "Lulus" : "Tidak Lulus"}`);
console.log(`GPA              : ${GPA}`);
console.log(`Kursi Tersedia   : ${seatsAvailable ? "Ya" : "Tidak"}`);
console.log(`Hasil Registrasi : ${registrationResults}`);