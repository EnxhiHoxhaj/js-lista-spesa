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

//creo il mio ciclo while
let i = 0;
while (i <= listaSpesa.length -1) {
    console.log(listaSpesa[i]);
    i++;
}

//creo gli elementi li

//inserisco la mia lista dell'html