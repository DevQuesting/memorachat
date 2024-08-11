// components/ChatList.js
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChat } from '../store/chatSlice';

const ChatList = () => {
    const chats = useSelector((state) => state.chat.chats);
    const dispatch = useDispatch();

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat.id} onClick={() => dispatch(setCurrentChat(chat))}>
                    {chat.name}
                </div>
            ))}
        </div>
    );
};

export default ChatList;
