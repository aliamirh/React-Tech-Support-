import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    var headerStyle ={
        border: '2px solid white',
        margin: '20px',
        padding: '15px',
        textAlign: 'left',
        fontSize: '40px',
        textShadow: '1px 1px black, -1px 1px black, 1px -1px black, -1px -1px black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: 'url("https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80")',
    };
    return(
        <div style={headerStyle} >
            <h3>The Hub</h3>
            <Link to="/">Home</Link><Link to="/reviews">About</Link><Link to="/">Appointments</Link><Link to="/">Reviews</Link> 
        </div>
    );
}

export default Header;