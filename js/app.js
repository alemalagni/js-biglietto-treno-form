// Dichiarazione variabili
const km = prompt("Inserire i chilometri da percorrere:");
const età = prompt("Inserire la propria età:");
let totale = 0;

// Script
totale = (km * 21) / 100;

if ( età < 18 ) {
    totale = totale * 0,80
} else if ( età >= 65 ) {
    totale = totale * 0,60
}

console.log(totale)