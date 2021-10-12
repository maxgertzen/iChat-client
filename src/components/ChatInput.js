import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import SendButton from './SendButton';

function ChatInput({ handleSubmit }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const sendMessage = () => {
        handleSubmit(text);
        setText("")
    }
    return (
        <form style={{
            minHeight: '10vh',
            width: '100%'
        }}>
            <FormGroup row sx={{ width: '100%' }}>
                <TextField id="user-msg" label="Message" sx={{ width: '90%' }} onChange={handleChange} value={text} autoFocus multiline minRows={1} variant={'outlined'} />
                <SendButton onClick={() => sendMessage()} />
            </FormGroup>
        </form>
    )
}

export default ChatInput
