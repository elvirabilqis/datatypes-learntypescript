/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];


function calculateTotalSales(sales: number[]): number {
  let total: number = 0;

  for (let i = 0; i < sales.length; i++) {
    total += sales[i];
  }

  return total;
}


function findHighestTransaction(sales: number[]): number {
  let tertinggi: number = sales[0];

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > tertinggi) {
      tertinggi = sales[i];
    }
  }

  return tertinggi;
}

function findLowestTransaction(sales: number[]): number {
  let terendah: number = sales[0];

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] < terendah) {
      terendah = sales[i];
    }
  }

  return terendah;
}

function calculateAverageSale(sales: number[]): number {
  const total: number = calculateTotalSales(sales);
  return total / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let jumlah: number = 0;

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > minimumAmount) {
      jumlah++;
    }
  }

  return jumlah;
}

function printSalesDashboard(sales: number[]): void {
  const total: number = calculateTotalSales(sales);
  const tertinggi: number = findHighestTransaction(sales);
  const terendah: number = findLowestTransaction(sales);
  const rataRata: number = calculateAverageSale(sales);
  const jumlahBesar: number = countLargeTransactions(sales, 500000);

  console.log("===== Daily Sales Dashboard =====");
  console.log(`Total Sales               : Rp${total.toLocaleString("id-ID")}`);
  console.log(`Highest Transaction       : Rp${tertinggi.toLocaleString("id-ID")}`);
  console.log(`Lowest Transaction        : Rp${terendah.toLocaleString("id-ID")}`);
  console.log(`Average Transaction       : Rp${rataRata.toLocaleString("id-ID")}`);
  console.log(`Transactions > Rp500.000  : ${jumlahBesar} transaksi`);
  console.log("==================================");
}
printSalesDashboard(sales);