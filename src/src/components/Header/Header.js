import React from 'react';
import headerStyle  from './header.css'

const Header = ({colorToRender}) => {

    return (
        <header style={colorToRender} className="header">
            <h1>React Random Quotes</h1>
        </header>
    )
}


export default Header;