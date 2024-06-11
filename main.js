//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while
//seleziono il mio contenitore lista dal DOM

let foglioSpesa = document.querySelector("ul");
console.log(foglioSpesa);

//creao la mia lista della spesa
let listaSpesa = [
    "Latte",
    "Biscotti",
    "Banana",
    "Vino",
    "Grana padano",
    "Pecorino",
    "Guanciale",
    "Spagetti",
    "Uova",
    "Caffè",
    "Marmellata",
    "Nutella",
    "Riso",
    "Salmone",
]

//Aggiungi nuovi elementi alla spesa
listaSpesa.push("Carta igenica", "Detersivo piatti", "Sale",);
//creo il mio ciclo while
let i = 0;
while (i < listaSpesa.length -1) {
    i++;
//creo gli elementi li e ci inserisco dentro gli elementi della mia lista
let item = listaSpesa[i];
let elencoPuntato = `<li>${item}</li>`;
console.log(elencoPuntato);
//inserisco la mia lista dell'html
foglioSpesa.innerHTML += elencoPuntato;
}


