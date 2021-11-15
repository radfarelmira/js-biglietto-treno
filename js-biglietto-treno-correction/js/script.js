// Il programma dovrà chiedere all'utente il numero di chilometri 
// che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo 
// totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma 
// umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Chiedo all'utente numero di km da percorrere e età del passeggero
const userKm = parseInt( prompt('Quanti km devi percorrere?') );
// console.log(userKm);
const userAge = parseInt( prompt('Quanti anni ha il passeggero?') );
// console.log(userAge);

if( isNaN( userKm ) || isNaN( userAge ) ) {
    alert('Gentile utente, i dati inseriti non sono validi');
} else {
    // Calcolare il prezzo della tariffa standard
    let price = userKm * 0.21;
    let discount = 0;

    if( userAge < 18 ) {
        discount = price * 0.2;
    } else if ( userAge > 65 ) {
        discount = price * 0.4;
    }

    price = price - discount;

    let userMessage = 'Gentile utente, il costo del tuo viaggio sarà di ' + price.toFixed(2) + ' Euro';

    // Output
    alert(userMessage);
}
