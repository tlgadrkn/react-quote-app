import React from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';
import style from './quoteContainer.css';
import Button from '../Button/Button';

const Quotes =  ({quoteToRender, buttonToRender, colorToRender, handleQuoteChange}) => {

return (
  <div  style={colorToRender} className="quote-container">
   <QuoteItem quoteToRender={quoteToRender}/>
    <Button handleQuoteChange={handleQuoteChange} buttonToRender={buttonToRender}/>

  </div>


  )


}


   
        
export default Quotes;