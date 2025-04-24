import * as React from 'react';
import Button from '@mui/joy/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/joy/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

const CreatePost = ({getAllPosts}) =>{
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');


  const createPost = async () => {
    const post = {title,body}
    const {data} = await axios.post('http://localhost:5555/api/posts',post)
    getAllPosts()
  };

  const handleClose1 = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', eight: '100vh', padding:10}}>
        <IconButton variant="soft" color='warning' size="lg" onClick={handleClose1}>
          <ControlPointIcon /> ADD POST
        </IconButton>
        
    </div>       
      <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: async (event) => {
                            event.preventDefault();
                            await createPost(); 
                            handleClose();
                            setTitle('');setBody('')
                        },
                    },
                }}
            >
        <DialogTitle variant='soft'color='warning'>New Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            color='warning'
            onChange={(e) => setTitle(e.target.value)}
            type="string"
            fullWidth
            variant="outlined"
          />           
            <TextField
            autoFocus
            margin="dense"
            id="body"
            name="body"
            label="body"
            color='warning'
            onChange={(e) => setBody(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color='warning'>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


export default CreatePost