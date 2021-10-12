import React from 'react';
import Grid from '@mui/material/Grid';
import ChatRoom from '../components/ChatRoom';


const Lobby = () => {
    return (<Grid container>
        <Grid item xs={3}>
            {/* RoomList */}
        </Grid>
        <Grid item xs={9}>
            <ChatRoom />
        </Grid>
    </Grid>)
}

export default Lobby