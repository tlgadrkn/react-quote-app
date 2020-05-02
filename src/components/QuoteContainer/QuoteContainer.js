import React from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';
import style from './quoteContainer.css';
import Button from '../Button/Button';

const Quotes =  ({quoteToRender, buttonToRender}) => {

return (
  <div style={style} className="quote-container">
   <QuoteItem quoteToRender={quoteToRender}/>
  <Button buttonToRender={buttonToRender}/>

  </div>


  )


}


   
        
export default Quotes;