// FSJS - Random Quote Generator
// Author: Guy Bridge
// Date: 28/07/2018

// Create the array of quote objects and name it quotes



let quotes = [quote1, quote2, quote3, quote4, quote5];

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote()
{
    let randomNumber = Math.random();
    return Math.floor(randomNumber * 6);
}

// Create the printQuote funtion and name it printQuote
function printQuote()
{
    let quote = document.getElementsByClassName("quote");
    quote.innerHTML = "Test";
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

printQuote();