import React from 'react';
import { Link } from 'react-router-dom';

function Review(){
    var reviewStyle ={
        margin: '20px',
        padding: '15px',
        border: '2px solid white', 
        borderRadius: '10px',
        boxShadow: '-12px 8px #36383b'
    };
    return(
        <div style={reviewStyle}>
        <h1>Author -</h1>
        <p>Aenean nec malesuada turpis. Nulla nulla sem, dictum et hendrerit ac, interdum sed erat. Nam eu semper velit. Curabitur gravida egestas pellentesque. Duis luctus ligula quis interdum dictum. Duis nec nibh non turpis condimentum consequat quis ut arcu. Vivamus vel tortor fringilla, commodo metus id, semper elit. Praesent eros nibh, semper nec felis id, dapibus tempor lacus. Sed euismod hendrerit hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pulvinar ante tincidunt odio placerat efficitur. Nulla pulvinar et ante ut dictum. Sed at turpis ac odio facilisis viverra</p>
        </div>
    );
}

export default Review;