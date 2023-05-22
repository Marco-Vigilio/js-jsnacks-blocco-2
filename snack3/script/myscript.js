/*
Calcola la somma dei primi 10 numeri
*/


let somma = 0;

let giri = 0;

while(giri != 10){
    let num = parseInt(prompt("Inserisci il tuo " + (giri+1) + "° numero"));
    console.log("Il tuo " + (giri+1) + "° numero inserito: " + num);
    somma = somma + num;
    console.log()
    giri = giri + 1;
}

console.log("La somma dei 10 numeri : " + somma);
console.log("La media dei 10 numeri è : " + (somma / 10));


/*
for(let i = 0; i <10; i++){
    let num = parseInt(prompt("Inserisci il tuo " + (i+1) + "° numero"));
    console.log("Numero inserito: " + num);
    somma = somma + num;
}
console.log("La somma dei 10 numeri : " + somma);
console.log("La media dei 10 numeri: " + (somma / 10));
*/