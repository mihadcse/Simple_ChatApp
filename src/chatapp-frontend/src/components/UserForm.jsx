import React, { useState } from 'react';
import { createUser } from '../services/api';
import LoginForm from "./LoginForm";

const UserForm = ({onLogin}) => {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser({ username });
            alert('User created!');
            window.location.reload();
            setUsername('');
        } catch (err) {
            console.error(err);
            alert('Failed to create user');
        }
    };

    // This function will be called by LoginForm on successful login
    const handleLogin = (username) => {
        alert(`Logged in as ${username}`);
        localStorage.setItem('username', username);
        onLogin(username);
        // You can add more logic here like setting user context, redirecting, etc.
    };

    return (
        <div>
            <h1 className="text-cyan-700 flex items-center justify-center text-6xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">ChatApp</h1>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
                <div className="max-w-7xl w-full flex flex-row justify-center gap-10">
                    {/* Create User Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md"
                    >
                        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
                            Create New User
                        </h2>

                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            className="w-full px-4 py-3 mb-6 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 duration-200"
                        >
                            Add User
                        </button>
                    </form>

                    {/* Login Form */}
                    <div className="w-full max-w-md">
                        <LoginForm onLogin={handleLogin} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
