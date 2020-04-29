import React from "react";



const quoteItemStyles = {
  margin: "0 auto"
}

function QuoteItem( {quoteToRender}) {




    return (
        <div style={quoteItemStyles} id="quote-box">
            <div className="quote-text">
                <span id="text">
                    <q>{quoteToRender.quote}</q>
                </span>
            </div>

            <div className="quote-author">
                <span id="author">
                    &mdash;{quoteToRender.author}
                </span>
            </div>


        </div>



    )
}



export default QuoteItem;