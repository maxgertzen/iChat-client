import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ChatInput from './ChatInput';
import Message from './Message';

const dummyMsgs = [<Message username={'David'} time={'13:30'} text={'Call me'} />,
<Message username={'Ras'} time={'13:30'} text={'Call me'} />,
<Message username={'Davis'} time={'13:30'} text={'Call me'} />,
<Message username={'Ona'} time={'13:30'} text={'Call me'} />]

const ChatRoom = () => {
    const [messages, setMessages] = useState(dummyMsgs)
    const addMessage = (text) => {
        setMessages(prev => [...prev, <Message username={'No'} time={'13:45'} text={text} />])
    }
    return (
        <Container>
            <Box sx={{
                minHeight: '80vh',
                maxHeight: '80vh',
                overflowY: 'scroll'
            }}>
                {messages.map(message => message)}
            </Box>
            <ChatInput handleSubmit={addMessage} />
        </Container>
    )
}

export default ChatRoom
