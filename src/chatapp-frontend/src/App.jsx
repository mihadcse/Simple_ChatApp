import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import MessagesPage from './pages/MessagePage';

function App() {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    return (
        <div className="App">
            {username ? (
                <MessagesPage username={username} />
            ) : (
                <UserForm onLogin={setUsername} />
            )}
        </div>
    );
}

export default App;
