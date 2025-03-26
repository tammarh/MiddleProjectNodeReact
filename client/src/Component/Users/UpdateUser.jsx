import * as React from 'react';
import { useState } from 'react';
import CreateUser from './CreateUser';
import axios from 'axios';
import Button from '@mui/material/Button';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';

function UpdateUser( { user,getallusers}) {

  // const [open, setOpen] = React.useState(false);
  // const [name, setName] = React.useState('');
  // const [username, setUsername] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [address, setAddress] = React.useState('');
  // const [phone, setPhone] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(user ? user.name : '');
  const [username, setUsername] = React.useState(user ? user.username : '');
  const [email, setEmail] = React.useState(user ? user.email : '');
  const [address, setAddress] = React.useState(user ? user.address : '');
  const [phone, setPhone] = React.useState(user ? user.phone : '');



  const updateUser = async () => {
    const user = {name, username,  email, address,phone}
    const {data} = await axios.put('http://localhost:5555/api/users',user)
    getallusers()
  };

  const handleClose1 = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color='primary' onClick={handleClose1}> <AddToQueueOutlinedIcon/>     </Button>

         <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: async (event) => {
                            event.preventDefault();
                            await updateUser(); 
                            handleClose();
                        },
                    },
                }}
            >
        <DialogTitle>UPDATE</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="name"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            fullWidth
            variant="outlined"
          />
            <TextField
            autoFocus
            margin="dense"
            id="address"
            name="email"
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            variant="outlined"
          />
            <TextField
            autoFocus
            margin="dense"
            id="phone"
            name="email"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Updae</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );







/*

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const uptadeData = async () => {
    try{
    const { data } = await axios.put('http://localhost:5555/api/users', {
      name,
      username,
      email,
      address,
      phone,
    });
    getallusers()
    setUpdate(null)
  }
 catch (error) {
  console.error("Error updating data:", error);

  };
  }
  return (
    <>
    {console.log('UPDATE')}
    <Box   visibility={update ? 'visible' : 'hidden'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // גובה המסך המלא
      }}
    >
      <Box
        sx={{
          width: '240px', // רוחב הריבוע
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => { e.preventDefault(); uptadeData(); }}
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="username"
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            color="secondary"
            required
          />
          <TextField
            label="name"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            color="warning"
          />
          <TextField
            label="phone"
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            color="warning"
          />
          <TextField
            label="address"
            onChange={(e) => setAddress(e.target.value)}
            variant="outlined"
            color="success"
          />
          <TextField
            label="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            type="email"
            color="success"
          />
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{ width: '25ch', padding: '15px 0' }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Box></>
    
  );*/
}

export default UpdateUser
