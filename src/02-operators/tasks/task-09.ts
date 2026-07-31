/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */


const hargaKeyboard: number = 850000;
const qtyKeyboard: number = 1;

const hargaMouse: number = 275000;
const qtyMouse: number = 2;

const hargaMonitorStand: number = 420000;
const qtyMonitorStand: number = 1;

const nilaiVoucher: number = 100000;
const isPremiumMember: boolean = true;
const rateRewardPoint: number = 50000; // 1 poin per Rp50.000
const persenPajak: number = 0.11;

const subtotalKeyboard: number = hargaKeyboard * qtyKeyboard;
const subtotalMouse: number = hargaMouse * qtyMouse;
const subtotalMonitorStand: number = hargaMonitorStand * qtyMonitorStand;
const subtotalProduk: number = subtotalKeyboard + subtotalMouse + subtotalMonitorStand;

const persenDiskonMember: number = 0.10;
const diskonMember: number = isPremiumMember ? subtotalProduk * persenDiskonMember : 0;

const setelahDiskonMember: number = subtotalProduk - diskonMember;
const setelahVoucher: number = setelahDiskonMember - nilaiVoucher;

const pembayaranSebelumPajak: number = setelahVoucher;
const jumlahPajak: number = pembayaranSebelumPajak * persenPajak;
const pembayaranAkhir: number = pembayaranSebelumPajak + jumlahPajak;
const rewardPoint: number = Math.floor(pembayaranSebelumPajak / rateRewardPoint);

const gratisOngkir: boolean = isPremiumMember || pembayaranSebelumPajak > 1500000;

console.log(`Subtotal Produk           : Rp${subtotalProduk.toLocaleString("id-ID")}`);
console.log(`Diskon Membership (10%)   : Rp${diskonMember.toLocaleString("id-ID")}`);
console.log(`Potongan Voucher          : Rp${nilaiVoucher.toLocaleString("id-ID")}`);
console.log(`Pembayaran Sebelum Pajak  : Rp${pembayaranSebelumPajak.toLocaleString("id-ID")}`);
console.log(`PPN (11%)                 : Rp${jumlahPajak.toLocaleString("id-ID")}`);
console.log(`Pembayaran Akhir          : Rp${pembayaranAkhir.toLocaleString("id-ID")}`);
console.log(`Reward Points             : ${rewardPoint} poin`);
console.log(`Gratis Ongkir             : ${gratisOngkir ? "YA" : "TIDAK"}`);