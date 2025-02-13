import React, { useState, useEffect } from 'react';

const InputLogger = () => {
    const [text, setText] = useState('');

    console.log('Component re-rendered'); // Logs on every render

    useEffect(() => {
        console.log(' useEffect ran because "text" changed:', text);
    }, [text]); // Runs only when 'text' changes

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type something..."
            />
            <p>You typed: {text}</p>
        </div>
    );
};

export default InputLogger;
