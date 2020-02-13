import React from 'react';
import Review from './Review.jsx'

function ReviewList(){
    var reviewListStyle ={
       display: 'grid',
       gridTemplateColumns: '1fr 1fr 1fr',
       textAlign: 'center',
    };
    return(
        <div style={reviewListStyle}>
        <Review/>
        <Review/>
        <Review/>
        </div>
    );
}

export default ReviewList;