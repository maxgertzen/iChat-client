import React from 'react';
import Box from '@mui/material/Box';

function Message({ username, time, text }) {
    return (
        <Box sx={{
            width: 50,
            bgcolor: 'secondary'
        }}>
            <h6>{username}</h6><span>{time}</span>
            <p>{text}</p>
        </Box>
    )
}

export default Message
