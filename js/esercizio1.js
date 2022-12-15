// Palidroma
// Chiedere all’utente di inserire una parola tramite un form
// Creare una funzione per capire se la parola inserita è palindroma

// Prendo gli elementi dalla pagina
const input = document.getElementById('word');
console.log(input);
const button = document.getElementById('button');
console.log(button);
const messageElement = document.getElementById('message');
console.log(messageElement);


//Creo una funzione per stabilire se una parola sia o meno palindroma
function isPalindroma(){
    const word = input.value.trim();
    console.log(word);
    if (!isNaN(word) || (word === '') || (!word)) {
        alert ('Devi inserire un testo!!');
        throw 'Devi inserire un testo!!'
    } else {
        let lettersOfWord = word.split('');
        console.log(lettersOfWord);
        lettersOfWord = lettersOfWord.reverse();
        console.log(lettersOfWord);
        const wordReverse = lettersOfWord.join('');
        console.log(wordReverse);
        let message = `La parola ${word} al contrario è ${wordReverse}`;
        const result = (word === wordReverse) ? message += ' quindi è palindroma' : message += ' quindi non è palindroma';
        console.log(result);
        console.log(message);
        return message;
    }
}

// Aggiungo l'evento al click del bottone
button.addEventListener ('click', function(){
    console.log(button);
    messageElement.innerText = isPalindroma();
});