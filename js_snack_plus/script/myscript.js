/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */

let elemento = "li";
let ul = document.querySelector("ul");

function CreazioneElementi(element){
    const li = document.createElement(element);
    return li;
}

for(let i = 0; i < 10; i++){
    let li = CreazioneElementi(elemento);
    li.append("Qualcosa" + (i+1));
    ul.appendChild(li);
}



console.log();