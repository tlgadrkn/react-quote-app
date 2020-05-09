import React, { useState, useEffect } from 'react';
import './App.css';
// import Header from './components/Header/Header';
import QuoteContainer from './components/QuoteContainer/QuoteContainer';

function App() {

  let [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [randomQuote, setRandomQuote] = useState([]);

  const URL = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
  const backroundColors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

useEffect(() => {
  async function getQuotes() {
      try {
          let response = await fetch(URL)
          let data = await response.json()
          setQuotes(data);
          setRandomQuote(data[Math.floor(Math.random() * data.length)])
      } catch (error) {
          console.log(`Fetch Error - ${error}`)
      } finally {
          setIsLoading(false)
      }

  }

  getQuotes()
}, [])



  const appColor = {
    backgroundColor: backroundColors[Math.floor(Math.random() * backroundColors.length)]
  }


const handleQuoteChange = () => {
  setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
}

if (isLoading) {
  return <h2 style= {{color: '#fff'}}>Quotes Are loading</h2>
 }

  return (
    <div className="App" >
      {/* <Header 
      colorToRender={appColor}/> */}
      <QuoteContainer 
       quoteToRender={randomQuote}
       colorToRender={appColor}
       handleQuoteChange={handleQuoteChange}
       />
    </div>
  );
}

export default App;
