import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton'
function SendButton(props) {
    return (
        <IconButton {...props}>
            <SendIcon color="primary" />
        </IconButton>
    )
}

export default SendButton
