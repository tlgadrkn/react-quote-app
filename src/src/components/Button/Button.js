 import React from 'react';
 import styles from './button.css';

const Button = ({handleQuoteChange, colorToRender, href}) => {

    return (
        <div className="btn-group">
            <button>
                <a href={href} className="twitter-share-button" data-show-count="false">
                    <ion-icon style={{color: colorToRender.backgroundColor}} name="logo-twitter"></ion-icon>

                </a>
            </button>
                <button style={{color: colorToRender.backgroundColor}}  onClick={handleQuoteChange}>New Quote</button>
          </div>
    )
    }

export default Button;