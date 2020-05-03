 import React from 'react';
 import styles from './button.css';

const Button = (props) => {

    return (
        <div className="btn-group">
   {props.buttonToRender && 
            props.buttonToRender
            .map( (button, index) => (
                <button onClick={props.handleQuoteChange} key={index}>{button}</button>
                )) }      
          </div>
    )
    }

export default Button;