/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function area (l1 , l2) {

// l1 = 20; l2=10;

// let area = l1 * l2;
// return area
// }

// console.log(area());
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(val1,val2){
//     val1=3; val2=2;
//     let sum =0;

//     if (val1===val2){
//         sum=(val1=val2)*3;
//     }else {somma = (val1+val2);
//     }
//     return sum
// }
// console.log(crazySum());

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazyDiff(val1,val2){
//     val1=100; val2=19;
//     let diff=0;
//     if ((val1-val2)>val2){
//         diff=(val1-val2)*3;

//     }else{
//         diff=val1-val2;

//     }
//         return diff;

// }
// console.log(crazyDiff());

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function boundary(num){
//     num = 25;
//     if( num>20 && num<100||(num===400)){
//         return true
//     }else{
//         return false
//     }

// }
// console.log(boundary());

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function codify(string){
//         let prefisso = "code";
//         let result;
//         if (string.StartsWith(prefisso)){
//             return result= string;
//         }else{
//             return result = prefisso+string;
//         }


// }
// console.log(codify());

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    // function check3and7(num){
    //     let numero = 21;
    //     if(numero % 7===0 && numero % 3 === 0){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    // console.log(check3and7());
/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let stringa = "EPICODE";
// function reverseString(string){
  
//     return stringa.split("").reverse().join("");


// }

// console.log(reverseString(stringa));
/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function upperFirst(string){
//     let parola = string.split(" ");
//     for (let i = 0; i < parola.length; i++) {
//         let maiuscolo = parola[i];
//         maiuscolo[i]=parola.charAt(0).toUpperCase()+parola.slice(1);
//     }
//     return maiuscolo.join(" ");
// }
// console.log(upperFirst("epicode is beautiful"));

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function cutString(string){
//     let parola = string.split(" ");
//     let taglio = "";
//     for (let i = 0; i < parola.length  ; i++) {
//         taglio = parola.pop()
//     }
//     return taglio;
// }
// console.log(cutString("ciao mondo mio"))

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function giveMeRandom(num){
//    let risultato=[];
//    for (let index = 0; index < 10; index++) {
//     let random = Math.round(Math.random()*10)
//     risultato.push(random);
    
//    }
//    return risultato;
// }
// console.log(giveMeRandom());