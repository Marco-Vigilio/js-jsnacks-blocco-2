
/**
 * 
 * ? Dati un input e due bottoni, 
 * l'utente popola una lista di ingredienti usando il primo bottone, 
 * al termine della quale preme un secondo bottone 
 * e viene generata un'immagine casuale di un pasto al centro dello schermo 
 * dopo 2 secondi per ogni ingrediente nella ricetta..
 */



let inviaIngrediente = document.querySelector("#invia");
let listaIngredienti = [];


inviaIngrediente.addEventListener("click", function(){
    
    let creaRicetta = document.querySelector("#crea");
    let ingrediente = document.querySelector("input");

    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    listaIngredienti.push(ingrediente.value);
    li.append(ingrediente.value);
    ul.append(li);
    console.log(listaIngredienti);

    creaRicetta.addEventListener("click", function(){

        let divImmagine = document.querySelector("#immagine");
        let piatto;
        divImmagine.innerHTML = " <img src=\"img/51721110_s-1.webp\" alt=\"piatto di lasagna\"> ";

    });    
});

