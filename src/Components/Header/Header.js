import React from 'react';
import './Header.css';
function Header({ emoji, title }) {
    return (
        <div className="Header">
            <div style={{fontSize:'45px'}}>
                <font style={{marginInlineEnd:'10px'}}>🤩</font>
                <font color="#FF2626">E</font>
                <font color="#252A34">M</font>
                <font color="#753422">O</font>
                <font color="#FFA500">J</font>
                <font color="#71EFA3">I</font>
                <font color="#0F52BA"> </font>
                <font color="#66CC66">L</font>
                <font color="#EEDC82">I</font>
                <font color="#FFCCCC">S</font>
                <font color="#00C1D4">T</font>
                <font style={{marginInlineStart:'10px'}}>🤩</font>
            </div>
            <a href={"https://imohammadsadra.com"}>By imohammadsadra.com</a>
        </div>
    );
}

export default Header;
