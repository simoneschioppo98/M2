/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number1= 5;
// let number2 = 6;
// if (number1<number2){
//   console.log(number2)
// }else{
//   console.log(number1)
// }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/




/* SCRIVI QUI LA TUA RISPOSTA */

// let number = 5;
// let diverso = 6;
// if (number !== diverso){
//   console.log("not equal")
// }else{
//   console.log("equal")
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number = 5;
// if (number % 5 === 0){
//   console.log("divisibile")
// }else{
//   console.log("non divisibile")
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number1 = 8;
// let number2 = 0;
// if (number1 == 8 || number2 == 8 && number1+number2 == 8){
//   console.log("8")
// }else { console.log("non è 8 ")}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let oggetto1 = 30;
// let oggetto2 = 20;
// let totalShoppingCart = oggetto1+oggetto2;
// if (totalShoppingCart == 50){
//   console.log("spedizione free")
// }else {
//   console.log("spedizione 10 euro")
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  let oggetto1 = 30;
//  let oggetto2 = 20;
//  let totalShoppingCart = oggetto1+oggetto2;
//  let discount = totalShoppingCart*0.8;
//  if (discount>totalShoppingCart){
//   console.log("free shipping")
//  }else{
//   console.log("pagamento spedizione")
//  }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number1= 5;
// let number2 = 4;
// let number3 = 6;
// if (number3>number1 && number1>number2){
//   console.log(number3,number1,number2)
// }else {
//   console.log("hai sbagliato")
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number = 5;

// typeof number;

// console.log(number);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// let number1 = 5;

// if (number1 % 5 === 0){
//   console.log("odd")
// }else{
//   console.log("even")
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

// // let val = 7
// // if (val  5) {
// //     console.log("Meno di 5");
// //   } else if (val < 10) {
// //     console.log("Meno di 10");
// //   } else {
// //     console.log("Uguale a 10 o maggiore");
// //   }
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

// let num = 0;

// if (num<5){
//   console.log("Tiny")
// }else if(num<10) {
//     console.log("Small")
// }else if (num<15){
//   console.log("Medium")
// }else if (num<20){
//   console.log("Large")
// }else if(num<=){ 
//   console.log("Huge")
// }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let n = 0;
//let x = 0;

//while (n<6) {
//  n++;
//  x+=n;
  
//}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const index = 0;
// for (let index = 0; index <11; index++) {
//   console.log(index)
// }

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const numero = 0;
// for (let numero = 0; numero < 11; numero++) {
//   if (numero === 3 && numero === 8){
//     continue
//   }
//   console.log(numero)
// }

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const numero = 0;

// for (let numero = 0; numero < 15; numero++) {
//   if (numero % 2 === 0){
//     console.log("dispari")
//   }else if (numero % 2 !== 0){
//     console.log("pari")
//   }

  
//}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const numero = 0;
// for (let numero = 0; numero < 100; numero++) {
//   if (numero % 3 === 0){
//       console.log("Fizz")
//   }else if (numero% 5 === 0){
//     console.log("buzz")
//   }
// }

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


