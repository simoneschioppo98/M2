/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// let x = 5;
// let y = 10;
// if (y>x){
//   console.log("è maggiore")
// }else{
//   console.log("non è maggiore")
// }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = 5;

// let y = 6;

// if(x<y){
//   console.log("not equal")
// }else{
//   console.log("equal")
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x=10;
// let y = 5 ;

// let resto = (x%y)

// if(resto==0){
//   console.log("divisibile per 5")
// }else {
//   console.log("non divisibile per 5")
// }
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let x = 8;
// let y = 0;

// if((x==8)||(y==8)||(x+y==8)||(x-y=8)){
//   console.log("ok")
// }else{ console.log("no")

// }





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let x=10;
// let y=40;

// totalShoppingCart= x+y;

// if (totalShoppingCart<50){
//   console.log("free shipping")
// }else{
//   console.log("costo di spedizione")
// }
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x=10;
// let y=40;

// let carrello = x + y;
// let sconto = 0.8;
// let totalShoppingCart= carrello * sconto;


// if (totalShoppingCart<50){
//   console.log("free shipping")
// }else{
//   console.log("costo di spedizione")
// }

/* ESERCIZIO 6


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let numero1 = 7;
// let numero2 = 3;
// let numero3 = 10;

// if (numero1>numero2 && numero3>numero1){
//   console.log(numero3, numero1,numero2)
// }else{
//   console.log(numero1,numero2,numero3)
// }



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number = 4
// console.log(typeof 4)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let number = 3

// let risultato = number % 2

// if(risulato = 0){
//   console.log("pari")
// }else{ console.log("dispari")

// }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let val = 7
// if (val < 5) {
//     console.log("Meno di 5");
//   } else if (val < 10) {
//     console.log("Meno di 10");
//   } else {
//     console.log("Uguale a 10 o maggiore");
//   }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 20

// if(num<5){
//   console.log("tiny")
// }else if(num<10){
//   console.log("small")
// }else if(num<15){
//   console.log("medium")
// }else if (num<20){
//   console.log("large")
// }else if(num>=20){
//   console.log("huge")
// }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let isMale = true;

// let gender = isMale ? "male" : "female"
// console.log(gender)
/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let n=0 , x=0;

// while(n<6){
//   console.log(n)
//   n++;
// }

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/




/* SCRIVI QUI LA TUA RISPOSTA */


// for(let number =0 ; number<11;  number ++)
// console.log(number)

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// for (let number = 0 ; number<11; number ++){
//   if (number===3){
//     continue;
//   } if(number===8){
//     continue;
//   }
//   console.log(number)
// }

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// for(let number=0; number<16; number++)
// if(number%2===0){
//   console.log(number+"è pari")
// }else{
//   console.log(number+"èdispari")
// }


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// for(numero = 0 ; numero < 101 ; numero ++){
//   if(numero%3 === 0 && numero %5 === 0){
//     console.log(numero+"fizzbuzz")
//   }else if(numero %3 ===0){
//     console.log(numero+"fizz")
//   } else if (numero % 5 === 0){
//     console.log(numero+ "buzz")
//   }

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

// switch(new Date() .getDay()){
//   case 0:
//     console.log(lunedì);
//     break
//   case 1 :
//     console.log(martedì);
//     break
//   case 2 :
//     console.log(mercoledì);
//   case 3:
//     console.log(giovedì);
//   case 4:
//     console.log(venerdì);
//   case 5:
//     console.log(sabato);
//   case 6:
//     console.log(domenica);
// }

/* SCRIVI QUI LA TUA RISPOSTA */
