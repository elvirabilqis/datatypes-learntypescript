/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */


const sales: number[] = [
  125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000];

let totalPendapatan: number = 0;
let transaksiTertinggi: number = sales[0];
let transaksiTerendah: number = sales[0];
let jumlahTransaksiBesar: number = 0;

for (let i = 0; i < sales.length; i++) {
  const transaksi: number = sales[i];
  totalPendapatan += transaksi;
  if (transaksi > transaksiTertinggi) {
    transaksiTertinggi = transaksi;
  }
   if (transaksi < transaksiTerendah) {
    transaksiTerendah = transaksi;
  }
   if (transaksi >= 300000) {
    jumlahTransaksiBesar++;
  }
}
const rataRataTransaksi: number = totalPendapatan / sales.length;

console.log(`Total Transaksi          : ${sales.length} transaksi`);
console.log(`Total Pendapatan         : Rp${totalPendapatan.toLocaleString("id-ID")}`);
console.log(`Transaksi Tertinggi      : Rp${transaksiTertinggi.toLocaleString("id-ID")}`);
console.log(`Transaksi Terendah       : Rp${transaksiTerendah.toLocaleString("id-ID")}`);
console.log(`Transaksi >= Rp300.000   : ${jumlahTransaksiBesar} transaksi`);
console.log(`Rata-rata Transaksi      : Rp${rataRataTransaksi.toLocaleString("id-ID")}`);
