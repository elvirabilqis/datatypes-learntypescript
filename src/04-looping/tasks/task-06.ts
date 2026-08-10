/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks: number[] = [
  25, 0, 18, 6, 42,
  9, 0, 55, 13, 2,
  30, 8, 41, 0, 16
];

let jumlahOutOfStock: number = 0;
let jumlahLowStock: number = 0;
let jumlahSafeStock: number = 0;
let totalInventory: number = 0;

for (let i = 0; i < stocks.length; i++) {
  const qty: number = stocks[i];


  totalInventory += qty;

  if (qty === 0) {
    jumlahOutOfStock++;
  } else if (qty < 10) {
    jumlahLowStock++;
  } else {
    jumlahSafeStock++;
  }
}


const rataRataStok: number = totalInventory / stocks.length;

console.log(`Total Produk           : ${stocks.length} produk`);
console.log(`Out of Stock (=0)      : ${jumlahOutOfStock} produk`);
console.log(`Low Stock (<10)        : ${jumlahLowStock} produk`);
console.log(`Safe Stock (>=10)      : ${jumlahSafeStock} produk`);
console.log(`Total Inventory        : ${totalInventory} unit`);
console.log(`Rata-rata Stok         : ${rataRataStok.toFixed(2)} unit`);
