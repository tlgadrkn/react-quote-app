import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import QuoteContainer from './QuoteContainer';

function App() {

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
  const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

let [randomQuote, setRandomQuote] = useState([]);

useEffect( () => {
  setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
}, [quotes])

  // useEffect(() => {
  //   fetch(URL)
  //   .then(res => res.json())
  //   .then(result => setQuotes(() => Array.from(result.quotes)))
  //   .catch(error => console.log(error)
    
  //  )});

  return (
    <div className="App">
      <Header />
      <QuoteContainer quoteToRender={randomQuote}/>
      <button>test</button>

    </div>
  );
}

export default App;
