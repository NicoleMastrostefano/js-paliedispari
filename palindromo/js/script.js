// Chiedere all’utente di inserire una parola.

var parola=prompt("Inserisci una parola "), prova ="";
console.log(parola);


// Creare una funzione per capire se la parola inserita è palindroma.


function palindromo() {
for (l=parola.length-1; l>=0; l--)
prova+=parola.charAt(l);
if (parola == prova)
messaggio.innerHTML=("La parola" + "  "+  parola  +"  "+ "e' palindroma ");
else
messaggio.innerHTML=("La parola" + "  " +  parola + "  "+ "non e' palindroma ");
}

console.log (palindromo());













// oppure
// if(parola.split("").reverse().join("") === parola)
