var n;
var pari = (n % 2==0);
pariDispari = (prompt("Scegli un valore tra pari o dispari"));
n = parseInt(prompt("Inserici un numero tra 1 e 5"));
console.log(n);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function casuale() {
var n2 = Math.round(Math.random()*4+1);
console.log(n2);
return n2;
}

var n2 = casuale()

// Sommiamo i due numeri.
var somma = n + n2;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function IsNotUneven(somma){
  if (isNaN(somma) == false){
    return (somma %2 == 0 ?  false : true);
  } else {
    return null;
  }
}

somma = IsNotUneven(somma);
console.log(IsNotUneven(somma));

// Dichiariamo chi ha vinto.
if (somma == false){
  document.getElementById("messaggio").innerHTML = "Tu hai scelto" + " " + pariDispari +"."+'<br>'+ "Vince pari!"
} else {
  document.getElementById("messaggio").innerHTML = "Tu hai scelto" + " " + pariDispari +"."+'<br>'+ "Vince dispari!"
}
