import React from 'react';

function  Footer(){
    var footerStyle ={
        border: '2px solid white',
        margin: '20px',
        padding: '10px',
        textAlign: 'center',
        fontSize: '20px',
        textShadow: '1px 1px black, -1px 1px black, 1px -1px black, -1px -1px black',
        display: 'grid',
        alignItems: 'center',
        backgroundImage: 'url("https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80")',
    };
    return(
        <div style={footerStyle} >
            <h3>The Hub</h3>
        </div>
    );
}

export default Footer;