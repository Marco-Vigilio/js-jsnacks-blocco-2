/**
 * @param
 * Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
 */

let parolaUno;
let parolaDue;

parolaUno = (prompt("Inserisci una parola"));
parolaDue = (prompt("Inserisci una parola"));

let pUno = parolaUno.length;
let pDue = parolaDue.length;

let verifica = false;

console.log(ConfrontoStringhe(pUno, pDue));

function ConfrontoStringhe (parolaOne, parolaTwo){
    if(parolaOne == parolaTwo){
        verifica = true;
        return verifica;
    }
    else{
        verifica = false;
        return verifica;
    }    
}