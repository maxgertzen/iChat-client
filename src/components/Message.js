import React from 'react';
import Box from '@mui/material/Box';

function Message({ username, time, text }) {
    return (
        <Box sx={{
            width: 80,
            bgcolor: 'secondary'
        }}>
            <h6>{username} <span>{time}</span></h6>
            <p>{text}</p>
        </Box>
    )
}

export default Message
