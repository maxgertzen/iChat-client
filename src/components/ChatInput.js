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
            minHeight: '10vh'
        }}>
            <FormGroup row>
                <TextField id="user-msg" label="Message" onChange={handleChange} value={text} autoFocus fullWidth multiline minRows={1} variant={'outlined'} />
                <SendButton onClick={() => sendMessage()} />
            </FormGroup>
        </form>
    )
}

export default ChatInput
