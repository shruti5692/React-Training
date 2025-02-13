import React, { useState, useEffect } from 'react';

const RandomNumberGenerator = () => {
    const [randomNumber, setRandomNumber] = useState(Math.random());

    useEffect(() => {
        console.log('Component re-rendered! New random number:', randomNumber);
    });

    return (
        <div>
            <h1>Random Number: {randomNumber}</h1>
            <button onClick={() => setRandomNumber(Math.random())}>Generate New Number</button>
        </div>
    );
};

export default RandomNumberGenerator;
