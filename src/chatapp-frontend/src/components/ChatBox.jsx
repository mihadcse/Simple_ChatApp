import React, { useState } from 'react';

const ChatBox = ({ messages, onSend, selectedUser }) => {
    const [text, setText] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    if (!selectedUser) {
        return <div className="w-2/3 flex items-center justify-center text-gray-500">Select a user to chat</div>;
    }

    return (
        <div className="w-2/3 p-4 flex flex-col justify-between">
            <div className="overflow-y-auto flex-1">
                <h2 className="text-xl font-bold mb-2">Chat with {selectedUser.username}</h2>
                <div className="space-y-2">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`p-2 rounded-lg w-fit max-w-xs ${
                                msg.senderId === 1 ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'
                            }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSend} className="mt-4 flex gap-2">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBox;
