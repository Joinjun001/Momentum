const quotes = [{
    quote:"Seize the day",
    author:"The Unknown",
},
{
    quote:"When you go through hardships and decide not to surrender, that is strength.",
    author:"Arnold Schwarzenegger",
},
{
    quote:"It is kind of fun to do the impossible.",
    author:"Walt Disney",
},
{
    quote:"I've failed over and over and over again in my life and that is why I succeed",
    author:"Michael Jordan",
},
{
    quote:"Tough times never last, but tough people do",
    author:"Robert H. Schuller",
},
{
    quote:"There are better starters than me but I'm a strong finisher",
    author:"Usain Bolt",
},
{
    quote:"Respect a man, he will do the more",
    author:"James Howell",
},
{
    quote:"The way get started is to quit talking and begin doing",
    author:"Walt Disney",
},
{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall",
    author:"Nelson Mandela",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author}`;
