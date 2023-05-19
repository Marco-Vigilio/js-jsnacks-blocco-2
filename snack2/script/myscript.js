/* 
Generare numero casuale tra 1 e 100 COMPRESI.
Continuare a chiedere all'utente di indovinare il numero 
fino a quando non lo indovina.
Ogni volta che sbaglia stampiamo in console un messaggio
che gli/le dice se il numero da indovinare è maggiore o minore.
Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.
*/

let numero = Math.floor(Math.random() * 10) + 1;

let numeroUtente = parseInt(prompt("Indovina un numero da 1 a 10"));

while(numero !== numeroUtente){
    if(numeroUtente < numero){
        console.log("Il tuo numero è minore da quello di indovinare");
        numeroUtente = parseInt(prompt("Il tuo numero è minore da quello di indovinare, Inserisci un numero"));
    }
    else{
        console.log("Il tuo numero è maggiore dal numero da indovinare");
        numeroUtente = parseInt(prompt("Il tuo numero è maggiore dal numero da indovinare, Inserisci un numero"));
    }
    console.log("Il numero da indovinare è : " + numero);
}

console.log("Hai indovinato il numero");
alert("Hai indovinato il numero");