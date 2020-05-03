import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import QuoteContainer from './components/QuoteContainer/QuoteContainer';

function App() {

  const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

  let buttons = ["Tweet This Quote", "New Quote"];
  
  const backroundColors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  let [quotes, setQuotes] = useState([
    {
      quote: "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse"
      },
      {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
      },
      {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein"
      },
      {
      quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost"
      },
      {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
      },

  ]);

let [randomQuote, setRandomQuote] = useState([]);
  const appColor = {
    backgroundColor: backroundColors[Math.floor(Math.random() * backroundColors.length)]
  }


useEffect( () => {
  setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
}, [quotes])

// later get quotes using fetch api #########

  // useEffect(() => {
  //   fetch(URL)
  //   .then(res => res.json())
  //   .then(result => setQuotes(() => Array.from(result.quotes)))
  //   .catch(error => console.log(error)
    
  //  )});

// Improve handlequoteChange function that it would handle if the quote is same with previous one. 
const handleQuoteChange = () => {
  setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
}
  return (
    <div className="App" >
      <Header colorToRender={appColor}/>
      <QuoteContainer 
       quoteToRender={randomQuote}
       buttonToRender={buttons} 
       colorToRender={appColor}
       handleQuoteChange={handleQuoteChange}
       />
    </div>
  );
}

export default App;
