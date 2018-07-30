// FSJS - Random Quote Generator
// Author: Guy Bridge
// Date: 28/07/2018


// Create the array of quote objects and name it quotes
let quotes = [
    {
    quote: "Maybourne, you are an idiot every day of the week. Why couldn’t you have taken one day off?",
    source: "Samantha Carter",
    citation: "Stargate SG-1",
    date: "2003"
}, {
    quote: "The Setesh guard’s nose drips.",
    source: "Teal'c",
    citation: "Stargate SG-1",
    date: "2002"
}, {
    quote: "I do not fear computers. I fear the lack of them.",
    source: "Isaac Asimov",
    citation: "",
    date: ""
}, {
    quote: "How inappropriate to call this planet 'Earth', when it is clearly 'Ocean'",
    source: "Arthur C. Clarke",
    citation: "",
    date: "1990"
}, {
    quote: "Science knows still practically nothing about the real nature of matter, energy, dimension, or time… But whatever the meaning and purpose of this universe, you are a legitimate part of it.",
    source: "Gene Roddenberry",
    citation: "",
    date: "1999"
}, {
    quote: "There's no place like 127.0.0.1",
    source: "Unknown",
    citation: "",
    date: ""
}

];

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
    
    // Store the return value of the getRandonQuote object
    const randomQuote = getRandomQuote();
    // Select the quote and source
    let quote = document.querySelector("p.quote");
    let author = document.querySelector("p.source");

    // Assing the quote and the author
    quote.textContent = randomQuote.quote;
    author.textContent = randomQuote.source;
    
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

// Method to change the background colour of the page
function changeBackgroundColour()
{
    // Create an array of material colours
    const colours = ["#03A9F4", "#E91E63", "#009688", "#607D8B", "#2196F3", "#4CAF50", "#3F51B5"];
    let randomColour = Math.floor(Math.random() * colours.length);
    
    document.body.style.backgroundColor = colours[randomColour];
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Print a quote
printQuote();