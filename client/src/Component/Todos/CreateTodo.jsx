import * as React from 'react';
import Button from '@mui/joy/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/joy/IconButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

const CreateTodo = ({getAllToodos}) =>{
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState([]);


  const createTodo = async () => {
    const todo = {title,tags}
    const {data} = await axios.post('http://localhost:5555/api/todos',todo)
    getAllToodos()
  };

  const handleClose1 = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', eight: '100vh', padding:15}}>
    <Button startDecorator={<AddIcon />} color="danger" onClick={handleClose1}>Add todo</Button>
    </div>       
      <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: async (event) => {
                            event.preventDefault();
                            await createTodo(); 
                            handleClose();
                        },
                    },
                }}
            >
        <DialogTitle color='warning'>New Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            type="string"
            fullWidth
            variant="outlined"
          />           
            <TextField
            autoFocus
            margin="dense"
            id="tags"
            name="tags"
            label="Tags"
            onChange={(e) => setTags(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


export default CreateTodo