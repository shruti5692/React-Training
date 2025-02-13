import React, { useState, useEffect } from 'react';

const FetchUserData = () => {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);

    console.log('Component re-rendered'); // Logs on every render

    useEffect(() => {
        console.log('useEffect ran because "userId" changed:', userId);
        
        const fetchUser = async () => {
            console.log('Fetching data for user:', userId);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUser(data);
        };

        fetchUser();
    }, [userId]); // Runs when 'userId' changes

    return (
        <div>
            <h1>User Info:</h1>
            {user ? <p>Name: {user.name}</p> : <p>Loading...</p>}
            <button onClick={() => setUserId(userId + 1)}>Next User</button>
        </div>
    );
};

export default FetchUserData;
