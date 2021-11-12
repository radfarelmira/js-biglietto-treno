// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//DECLARATION
//chiedere all'utente il numero di chilometri che vuole percorrere
const numberOfkm = parseInt ( prompt ('Quanto km lunga la tua destinazione?'));
console.log (numberOfkm);
//chiedere all'utente l'età del passeggero
const userAge = parseInt ( prompt ('Quale la tua età?'));
console.log (userAge);

//LOGIC
// Calcolare il prezzo del biglietto del viaggio
let price = (numberOfkm * 0.21);
console.log (price);
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

//Se il passeggero è i minorenni va applicato uno sconto del 20% 

// Se il passeggero ha over 65 anni va applicato uno sconto del 40%

// Alterimenti prezzo senza sconto


// OUTPUT