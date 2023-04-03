import React, { useContext, useState } from 'react'
import { Button, Container, Grid, TextField } from '@mui/material';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const Chat = () => {
    const [value, setValue] = useState('')
    // const [messeges, loading] = useCollectionData(
    //     firestore.collection('messeges').orderBy('createdAt')
    // )
    // function sendMessege() {
    //     console.log(value)
    // }
  return (
    <Container>
         <Grid
            container
            style={{height: window.innerHeight - 50, marginTop: '20px'}}
            justifyContent={'center'}
         >
            <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
            </div>
            <Grid container alignItems={'flex-end'} direction={'column'} style={{width: '80%', marginTop: '7px' }} >
                <TextField onClick={(e) => setValue(e.target.value)} fullWidth rowsMax={2} variant={'outlined'} />
                <Button  variant={'outlined'} >Send</Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Chat