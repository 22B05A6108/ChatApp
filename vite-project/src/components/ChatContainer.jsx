import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa6';

const ChatContainer = () => {
    const [user, setUser] = useState(localStorage.getItem('user'));

    return (
        <div>
            {user ? (
                <div>
                    <div className='chats_header'>
                        <h4>
                            Username: Priya
                        </h4>
                        <p>
                            <FaYoutube className='chats_icon' /> Code with Priya
                        </p>
                        <p className='chats_logout'>
                            <strong>Logout</strong>
                        </p>
                    </div>
                    <ChatLists /> 
                    <InputText />
                </div>
            ) : (
                <div>
                    {/* Render something else when user is not logged in */}
                </div>
            )}
        </div>
    );
}

export default ChatContainer;
