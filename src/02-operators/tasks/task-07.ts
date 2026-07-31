/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */


const hargaKamarPerMalam: number = 650000;
const jumlahMalam: number = 4;
const biayaLayanan: number = 120000;
const persenPajak: number = 0.11;
const isVIP: boolean = true;

const subtotalKamar: number = hargaKamarPerMalam * jumlahMalam;
const persenDiskon: number = 0.12;
const jumlahDiskon: number = isVIP ? subtotalKamar * persenDiskon : 0;
const kamarSetelahDiskon: number = subtotalKamar - jumlahDiskon;

const dasarPajak: number = kamarSetelahDiskon + biayaLayanan;
const jumlahPajak: number = dasarPajak * persenPajak;

const pembayaranAkhir: number = dasarPajak + jumlahPajak;
const gratisSarapan: boolean = jumlahMalam >= 3 || isVIP;

console.log(`Subtotal Kamar        : Rp${subtotalKamar.toLocaleString("id-ID")}`);
console.log(`Diskon VIP            : Rp${jumlahDiskon.toLocaleString("id-ID")}`);
console.log(`Kamar Setelah Diskon  : Rp${kamarSetelahDiskon.toLocaleString("id-ID")}`);
console.log(`Biaya Layanan         : Rp${biayaLayanan.toLocaleString("id-ID")}`);
console.log(`Pajak (11%)           : Rp${jumlahPajak.toLocaleString("id-ID")}`);
console.log(`Pembayaran Akhir      : Rp${pembayaranAkhir.toLocaleString("id-ID")}`);
console.log(`Sarapan Gratis        : ${gratisSarapan ? "Iya" : "Tidak"}`);