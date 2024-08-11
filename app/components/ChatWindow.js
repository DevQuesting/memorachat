// components/ChatWindow.js
import { useSelector } from 'react-redux';

const ChatWindow = () => {
    const currentChat = useSelector((state) => state.chat.currentChat);

    return (
        <div>
            {currentChat ? (
                <div>
                    <h2>{currentChat.name}</h2>
                    {/* Display messages here */}
                </div>
            ) : (
                <div>Select a chat to start messaging</div>
            )}
        </div>
    );
};

export default ChatWindow;
