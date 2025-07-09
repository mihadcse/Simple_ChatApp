import React, { useState, useEffect } from 'react';
import { getUsers, getMessages, sendMessage } from '../services/api';
import UserList from '../components/UserList';
import ChatBox from '../components/ChatBox';

const MessagesPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);

    const currentUserId = 1; // TODO: replace with actual logged-in user ID

    useEffect(() => {
        getUsers().then((res) => setUsers(res.data));
    }, []);

    useEffect(() => {
        if (selectedUser) {
            getMessages(currentUserId, selectedUser.id).then((res) => setMessages(res.data));
        }
    }, [selectedUser]);

    const handleSend = async (text) => {
        await sendMessage({
            senderId: currentUserId,
            receiverId: selectedUser.id,
            content: text,
        });
        getMessages(currentUserId, selectedUser.id).then((res) => setMessages(res.data));
    };

    return (
        <div className="flex h-screen">
            <button
                onClick={() => {
                    localStorage.removeItem('username');
                    window.location.reload(); // or lift state back to App
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded m-4 p-4 h-10"
            >
                Logout
            </button>
            <UserList users={users} onSelect={setSelectedUser} selectedUser={selectedUser} />
            <ChatBox messages={messages} onSend={handleSend} selectedUser={selectedUser} />
        </div>
    );
};

export default MessagesPage;
