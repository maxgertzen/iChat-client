import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ChatInput from './ChatInput';
import Message from './Message';

const ChatRoom = () => {
    return (
        <Container>
            <Box sx={{
                maxHeight: '90vh'
            }}>
                <Message username={'David'} time={'13:30'} text={'Call me'} />
                <Message username={'Ras'} time={'13:30'} text={'Call me'} />
                <Message username={'Davis'} time={'13:30'} text={'Call me'} />
                <Message username={'Ona'} time={'13:30'} text={'Call me'} />
            </Box>
            <ChatInput />
        </Container>
    )
}

export default ChatRoom
