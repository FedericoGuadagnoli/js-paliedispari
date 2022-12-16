                               // Pari e Dispari \\

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Prendo gli elementi dalla pagina
const select = document.getElementById('select');
const input = document.getElementById('number');
const button = document.getElementById('button');
const winnerElement = document.getElementById('winner');
const yourNumber = document.getElementById('user-number');
const choise = document.getElementById('choise');
const cpuNumberElement = document.getElementById('cpu-number');
const resultElement = document.getElementById('result');

// Creo una funzione per generare un numero casuale tra 1 e 5
function getRandomNumber (min = 1, max = 5){
    const randomNumber = Math.floor(Math.random() * max) + min;
    console.log('randomnumber ' + randomNumber);
    return randomNumber;
}


// Creo una funzione per stabilire se la somma dei due numeri sia pari o dispari
function isEven(sum){
    let result = 'dispari';
    if (sum % 2 === 0){
        result = 'pari';
    }
    return result;
}


// Aggiungo un evento al click del bottone
button.addEventListener('click', function(){
    let userChoise = select.value;
    const userNumber = parseInt(number.value.trim());
    console.log('usernumber ' + userNumber);

    //Verifico che il value di userNumber sia un numero tra 1 e 5 
   if (userNumber < 1 || userNumber > 5) {
    alert ('Devi inserire un numero tra 1 e 5');
    throw '';
   }

   // Sommo i due numeri 
   const cpuNumber = getRandomNumber();
   let sum = userNumber + cpuNumber;
   console.log('sum ' + sum);

  
   // Calcolo il vincitore
   let winner = `${sum} è ${isEven(sum)} quindi il vincitore `;
   console.log(winner);
   userChoise === isEven(sum) ? winner += 'sei tu!!' : winner += 'è la cpu';
    
    // Stampo in pagina 
    yourNumber.innerText = `Il tuo numero è : ${userNumber}`;
    choise.innerText = `Hai scelto : ${userChoise}`;
    cpuNumberElement.innerText = ` Il numero della cpu è : ${cpuNumber}`;
    resultElement.innerText = `la somma è ${sum}`;
    winnerElement.innerText = winner;
    
});