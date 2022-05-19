const newQuoteBtn  = document.getElementById("new-quote");
const tweetBtn  = document.getElementById("twitter");
const quoteText  = document.getElementById("quote");
const quoteAuthor  = document.getElementById("author");
const quoteContainer  = document.getElementById("quote-container");

const apiUril = "https://type.fit/api/quotes";

let apiQuotes = []

const newQuote = ()=>{
    const theQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if(quoteText.length > 120){
        quoteText.classList.add("long-quote")
    }else{
        quoteText.classList.remove("long-quote")
    }
    quoteText.textContent = theQuote.text;
    quoteAuthor.textContent = theQuote.author
}

async function getQuotes(){
    try {
        const response = await fetch(apiUril);
        apiQuotes = await response.json();
        newQuote()
    } catch (error) {
        //error
    }
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
    window.open(twitterUrl, "_blank")
}

getQuotes()

tweetBtn.addEventListener("click", tweetQuote)
newQuoteBtn.addEventListener("click",getQuotes)

