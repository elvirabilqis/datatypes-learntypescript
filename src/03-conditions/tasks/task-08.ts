/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */


const passenger: string = "Fajar Nugroho"
const onlinecheckIn: boolean = true;
const cabinClass: string = "Economy";
const baggageWeight: number = 24;
let resultMessage: string = "";

if (!onlinecheckIn) {
  resultMessage = "Please complete online check-in first.";
} else {
  
  if (baggageWeight > 20) {
    if (cabinClass === "Business") {
      resultMessage = "Extra baggage allowed.";
    } else {
      resultMessage = "Additional baggage fee required.";
    }
  } else {
    resultMessage = "Proceed to boarding pass printing.";
  }
}

console.log(`Nama Penumpang   : ${passenger}`);
console.log(`Online Check-in  : ${onlinecheckIn ? "Ya" : "Tidak"}`);
console.log(`Kelas Kabin      : ${cabinClass}`);
console.log(`Berat Bagasi     : ${baggageWeight} kg`);
console.log(`Hasil            : ${resultMessage}`);