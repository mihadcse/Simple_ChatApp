import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace with actual login logic (API call)
        if (username.trim()) {
            alert(`Logging in as ${username}`);
            onLogin(username);
        } else {
            alert('Please enter a username');
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md"
        >
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
                Login
            </h2>

            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 mb-6 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />

            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 duration-200"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
