/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */


const customerName: string = "Nadia Putri";
const premiumMember: boolean = true;
const roomAvailable: boolean = false;
let reservationResult: string = "";

  if (premiumMember) {
    reservationResult = "Selamat! Anda mendapatkan upgrade kamar gratis (Free Room Upgrade).";
  } else {
    reservationResult = "Kamar Anda telah dikonfirmasi sesuai reservasi.";
  }

  if (premiumMember) {
    reservationResult = "Anda dimasukkan ke dalam Priority Waiting List.";
  } else {
    reservationResult = "Mohon maaf, saat ini tidak ada kamar yang tersedia.";
  }


console.log(`Nama Customer   : ${customerName}`);
console.log(`Premium Member  : ${premiumMember ? "Ya" : "Tidak"}`);
console.log(`Kamar Tersedia  : ${roomAvailable ? "Ya" : "Tidak"}`);
console.log(`Hasil Reservasi : ${reservationResult}`);