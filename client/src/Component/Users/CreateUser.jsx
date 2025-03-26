
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/joy/IconButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import axios from 'axios';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import Typography from '@mui/joy/Typography';
import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';


const CreateUser = ({getallusers}) =>{
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);




  const createUser = async () => {
    const user = {name, username,  email, address,phone}
    try {
       const res = await axios.post('http://localhost:5555/api/users',user)
       if(res.status == 200)
            getallusers()
    } catch (error) {
      setErrorMessage('Username have to by unique.')
      return (
        <Alert
          startDecorator={<WarningIcon />}
          variant="soft"
          color="danger"
          endDecorator={
            <React.Fragment>
              <IconButton variant="soft" size="sm" color="danger">
                <CloseIcon />
              </IconButton>
            </React.Fragment>
          }
        >
             
        </Alert>
     
      
    ); }
   
  };

  const handleClose1 = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setErrorMessage(null);
  };
  return (<>
    {errorMessage && 
        <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1000 }}>
(
      <Alert
        startDecorator={<WarningIcon />}
        variant="soft"
        color="danger"
        endDecorator={
          <React.Fragment>
            <IconButton variant="soft" size="sm" color="danger" style={{ fontSize: '5rem', padding: '16px', width: '100%' }}onClick={handleClose2}>
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      >
        {errorMessage}
      </Alert> )
      </div>
   }
    <React.Fragment>
      <Button variant="outlined" color='secondary' onClick={handleClose1}><PersonAddAlt1Icon/>      </Button>

         <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: async (event) => {
                            event.preventDefault();
                            await createUser(); 
                            handleClose();
                        },
                    },
                }}
            >
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="username"
            label="User name"
            onChange={(e) => setUsername(e.target.value)}
            type="string"
            fullWidth
            variant="outlined"
          />
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
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment></>
  );
}


export default CreateUser