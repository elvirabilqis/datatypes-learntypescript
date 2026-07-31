/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const meterSebelumnya: number = 25640;
const meterSekarang: number = 25892;
const hargaPerKWh: number = 1650;
const adaPanelSurya: boolean = true;
const modeHematEnergi: boolean = false;

const totalPemakaian: number = meterSekarang - meterSebelumnya;

const tagihanAwal: number = totalPemakaian * hargaPerKWh;

const persenDiskonSurya: number = 0.20;
const diskonSurya: number = adaPanelSurya ? tagihanAwal * persenDiskonSurya : 0;

const persenDiskonHemat: number = 0.05;
const diskonHemat: number = modeHematEnergi ? tagihanAwal * persenDiskonHemat : 0;

const totalDiskon: number = diskonSurya + diskonHemat;
const tagihanAkhir: number = tagihanAwal - totalDiskon;
const eligibleGreenEnergy: boolean = adaPanelSurya && totalPemakaian < 300 && modeHematEnergi;

console.log(`Total Pemakaian Energi  : ${totalPemakaian} kWh`);
console.log(`Tagihan Sebelum Diskon  : Rp${tagihanAwal.toLocaleString("id-ID")}`);
console.log(`Diskon Panel Surya (20%): Rp${diskonSurya.toLocaleString("id-ID")}`);
console.log(`Diskon Hemat Energi (5%): Rp${diskonHemat.toLocaleString("id-ID")}`);
console.log(`Tagihan Akhir           : Rp${tagihanAkhir.toLocaleString("id-ID")}`);
console.log(`Eligible Green Energy   : ${eligibleGreenEnergy ? "YA" : "TIDAK"}`);