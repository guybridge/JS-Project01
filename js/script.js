// FSJS - Random Quote Generator
// Author: Guy Bridge
// Date: 28/07/2018


// Create the array of quote objects and name it quotes
let quotes = [quote1, quote2, quote3, quote4, quote5, quote6];



// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote()
{
    let randomNumber = Math.floor(Math.random() * 6);
    return quotes[randomNumber];
}

// Create the printQuote funtion and name it printQuote
function printQuote()
{
    // change the background colour
    changeBackgroundColour();
    
    const randomQuote = getRandomQuote();
    // Select the quote and source
    let quote = document.querySelector("p.quote");
    let author = document.querySelector("p.source");

    // Assing the quote and the author
    quote.textContent = randomQuote.quote;
    author.textContent = randomQuote.author;
    
    // Check if we have the optional data and set
    if(randomQuote.date !== "")
        {
            author.innerHTML = author.innerHTML + "<span class='citation'>" + randomQuote.citation + "</span>";
        }
    
    if(randomQuote.citation !== "")
        {
            author.innerHTML = author.innerHTML + "<span class='year'>" + randomQuote.date + "</span>";
        }
}

function changeBackgroundColour()
{
    const colours = ["red", "blue", "green", "purple", "cyan"]
    let randomColour = Math.floor(Math.random() * colours.length);
    
    document.body.style.backgroundColor = colours[randomColour];
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Print a quote
printQuote();