/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */


const jamPakai: number = 7;
const menitPakai: number = 35;
const tarifPerJam: number = 8000;

const totalMenit: number = jamPakai * 60 + menitPakai;

const jamPenuh: number = Math.floor(totalMenit / 60);
const sisaMenit: number = totalMenit % 60;

const jamDitagih: number = sisaMenit > 0 ? jamPenuh + 1 : jamPenuh;
const totalSebelumDiskon: number = jamDitagih * tarifPerJam;

const lebihDari5Jam: boolean = totalMenit > 5 * 60;
const persenDiskon: number = 0.15;
const jumlahDiskon: number = lebihDari5Jam ? totalSebelumDiskon * persenDiskon : 0;

const pembayaranAkhir: number = totalSebelumDiskon - jumlahDiskon;

console.log(`Total Waktu Bermain     : ${totalMenit} menit`);
console.log(`Sisa Menit Setelah Jam Penuh : ${sisaMenit} menit`);
console.log(`Total Jam Ditagih       : ${jamDitagih} jam`);
console.log(`Total Sebelum Diskon    : Rp${totalSebelumDiskon.toLocaleString("id-ID")}`);
console.log(`Jumlah Diskon           : Rp${jumlahDiskon.toLocaleString("id-ID")}`);
console.log(`Pembayaran Akhir        : Rp${pembayaranAkhir.toLocaleString("id-ID")}`);
