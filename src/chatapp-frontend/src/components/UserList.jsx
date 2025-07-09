import React from 'react';

const UserList = ({ users, onSelect, selectedUser }) => {
    return (
        <div className="w-1/3 border-r border-gray-300 overflow-y-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            {users.map((user) => (
                <div
                    key={user.id}
                    onClick={() => onSelect(user)}
                    className={`p-2 mb-2 rounded cursor-pointer ${
                        selectedUser?.id === user.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                    {user.username}
                </div>
            ))}
        </div>
    );
};

export default UserList;
