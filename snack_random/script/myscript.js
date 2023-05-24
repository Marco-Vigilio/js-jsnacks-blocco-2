/**
 * 
 * Creare una funzione che restituisca un array di quattro numeri randomici 
 * diversi tra loro tra 1 e 5 inclusi
 * 
 */
let array = [];

for(let i = 0; i < 4; i++){
    let numberRepeat;
    let numberRandom = NumberRandom();

    //array[i] = numberRandom;
    //console.log(numberRandom);

    if(array.includes(numberRandom)){
        console.log("Numero gia inserito" + numberRandom);
        numberRepeat = NumberRandom();
        console.log(numberRepeat);

    }
    else{
        array[i] = numberRandom;
        console.log(numberRandom);
    }
    
}

console.log(array);

function NumberRandom(){
    let numero = Math.floor(Math.random()*5)+1;
    return numero;
}