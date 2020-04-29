import React from 'react';
import QuoteItem from './QuoteItem';

const Quotes =  ({quoteToRender}) => {
 const quoteContainerStyle = {
  backgroundColor: "cornsilk",
  padding: "5em",

 }

return (
  <div style={quoteContainerStyle} className="quote-container">
   <QuoteItem quoteToRender={quoteToRender}/>
  </div>


  )


}


   
        
export default Quotes;