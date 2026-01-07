// Steg 1: Variabler

const firstName: string = "Brook";
let age: number = 90;
let isStudent: boolean = false;

console.log(
  `Jag heter ${firstName}, är ${age} år och det ${isStudent} att jag är student.`,
);

// age = "Tretio";

// Steg 2: Aritmetik
const a: number = 15;
const b: number = 4;

const sum: number = a + b;
const product: number = a * b;
const remainder: number = a % b;

console.log(`sum: ${sum}`);
console.log(`product: ${product}`);
console.log(`remainder: ${remainder}`);

// Steg 3: Uppdateringar
let score: number = 10;

// plockar upp svamp
score += 5;

// trillar ner i ett håll
score -= 2;

console.log(`score: ${score}`);

// Steg 4: Biografen

const ticketPrice: number = 120;
let cashRegister: number = 0;
const popcorn: number = 59;
let totalCost: number;

// Kund köper 3 biljeter
totalCost = ticketPrice * 3;

// Kund köper även popcorn
totalCost += 59;

// Kund betalar
cashRegister += totalCost;

console.log(`Det blir ${totalCost} kr. I kassan finns nu: ${cashRegister} kr`);

let isVip: boolean = true;

if (isVip) {
  const discount: number = 20;
  const vipPrice = totalCost - discount;
  console.log(`Med VIP-rabatt: ${vipPrice} kr`);
}

// console.log(discount);
