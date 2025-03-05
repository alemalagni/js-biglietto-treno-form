// Dichiarazione variabili
const genera = document.getElementById("genera");
const annulla = document.getElementById("annulla");
let totale = 0;

// Script
genera.addEventListener('click',
    function () {
        // Dichiarazioni
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

        // Nome passegero
        const nome = document.getElementById("nome");
        const nomePassaggero = document.getElementById("nomePasseggero");
        nomePassaggero.innerHTML = nome.value;

        // Offerta
        const offerta = document.getElementById("offerta");
        offerta.innerHTML = "Biglietto Standard";

        // Carrozza
        const carrozza = document.getElementById("carrozza");
        carrozza.innerHTML = parseInt(Math.random() * 14 + 1)

        // Codice CP
        const codice = document.getElementById("codice");
        codice.innerHTML = parseInt(Math.random() * 99999 + 1)
    } 
);

annulla.addEventListener('click',
    function() {
        // Dichiarazioni
        const km = document.getElementById("km");
        const età = document.getElementById("età");
        const tot = document.getElementById("totale");
        const nome = document.getElementById("nome");
        const nomePassaggero = document.getElementById("nomePasseggero");
        const offerta = document.getElementById("offerta");
        const carrozza = document.getElementById("carrozza");
        const codice = document.getElementById("codice");

        // Script
        km.value = "";
        età.value = "";
        nome.value = "";
        tot.innerHTML = "";
        nomePassaggero.innerHTML = "";
        offerta.innerHTML = "";
        carrozza.innerHTML = "";
        codice.innerHTML = "";
    }
)