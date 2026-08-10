/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let jumlahGold: number = 0;
let jumlahSilver: number = 0;
let jumlahBronze: number = 0;
let jumlahNoMedal: number = 0;
let totalNilai: number = 0;

for (let i = 0; i < scores.length; i++) {
  const nilai: number = scores[i];

  totalNilai += nilai;
   if (nilai >= 95) {
    jumlahGold++;
  } else if (nilai >= 85) {
    jumlahSilver++;
  } else if (nilai >= 75) {
    jumlahBronze++;
  } else {
    jumlahNoMedal++;
  }
}
const rataRataNilai: number = totalNilai / scores.length;

console.log(`Total Peserta        : ${scores.length} orang`);
console.log(`Gold Medal (>=95)    : ${jumlahGold} orang`);
console.log(`Silver Medal (85-94) : ${jumlahSilver} orang`);
console.log(`Bronze Medal (75-84) : ${jumlahBronze} orang`);
console.log(`No Medal (<75)       : ${jumlahNoMedal} orang`);
console.log(`Rata-rata Nilai      : ${rataRataNilai.toFixed(2)}`);