// Dichiarazione variabili
const genera = document.getElementById("genera");
let totale = 0;

// Script
genera.addEventListener('click',
    function () {
        // Dichiarazione
        const km = document.getElementById("km");
        const età = document.getElementById("età");

        // Script
        totale = km.value * 0.21;

        if ( età.value < 18 ) {
            totale = totale * 0.80;
        } else if ( età.value >= 65 ) {
            totale = totale * 0.60;
        }

        // Print
        const tot = document.getElementById("totale");
        tot.innerHTML = parseFloat(totale).toFixed(2) + "€";
    }
    
);