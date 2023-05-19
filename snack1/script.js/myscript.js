/*
Crea un array vuoto e 
chiedi all'utente un numero da inserire nell'array.
 Continua a chiedere i numeri all'utente e
  a inserirli nell'array fino a quando 
  la somma degli elementi è minore di 50.
*/

let somma = 0;
let array = [];

while(somma < 50){
  let num = parseInt(prompt("Inserisci un numero: "));
  array.push(num);
  somma = somma + num;
  console.log(array);
  console.log(somma);
}

/*
while(((numero % 2) == 1) && verifica === false){
    console.log("Il numero è dispari");
    
    verifica = true;
}

*/