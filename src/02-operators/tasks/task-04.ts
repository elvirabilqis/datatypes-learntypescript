/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */


const hargaKeyboard: number = 850000;
const qtyKeyboard: number = 1;

const hargaMouse: number = 275000;
const qtyMouse: number = 2;

const hargaMousePad: number = 120000;
const qtyMousePad: number = 1;

const isPremiumMember: boolean = true;

const subtotalKeyboard: number = hargaKeyboard * qtyKeyboard;
const subtotalMouse: number = hargaMouse * qtyMouse;
const subtotalMousePad: number = hargaMousePad * qtyMousePad;

const subtotal: number = subtotalKeyboard + subtotalMouse + subtotalMousePad;

let totalItem: number = 0;
totalItem += qtyKeyboard; 
for (let i = 0; i < qtyMouse; i++) {
  totalItem++;
}
totalItem += qtyMousePad;

const dapatDiskon: boolean = subtotal > 1000000;
const persenDiskon: number = 0.10;
const jumlahDiskon: number = dapatDiskon ? subtotal * persenDiskon : 0;

const setelahDiskon: number = subtotal - jumlahDiskon;

const ongkir: number = 0;
const biayaOngkir: number = isPremiumMember ? 0 : ongkir;

const pembayaranAkhir: number = setelahDiskon + biayaOngkir;

console.log(`Subtotal              : Rp${subtotal.toLocaleString("id-ID")}`);
console.log(`Total Item Dibeli     : ${totalItem} item`);
console.log(`Dapat Diskon 10%      : ${dapatDiskon ? "YA" : "TIDAK"}`);
console.log(`Jumlah Diskon         : Rp${jumlahDiskon.toLocaleString("id-ID")}`);
console.log(`Gratis Ongkir (Premium): ${isPremiumMember ? "YA" : "TIDAK"}`);
console.log(`Pembayaran Akhir      : Rp${pembayaranAkhir.toLocaleString("id-ID")}`);