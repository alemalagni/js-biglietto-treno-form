// Dichiarazione variabili
const km = document.getElementById("km");
const età = document.getElementById("età");
const genera = document.getElementById("genera");
let totale = 0;

// Script
genera.addEventListener('click',
    function () {
        totale = km.innerHTML * 0.21;

        if ( età.innerHTML < 18 ) {
            totale = totale * 0.80;
        } else if ( età.innerHTML >= 65 ) {
            totale = totale * 0.60;
        }

        console.log(totale)
    }
    
);