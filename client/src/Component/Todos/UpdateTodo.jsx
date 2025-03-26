import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import EditIcon from '@mui/icons-material/Edit';
function UpdateTodo( { todo,getAllToodos}) {

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(todo ? todo.title : '');
  const [tags, setTags] = React.useState(todo ? todo.tags : '');
 


  const updateTodo = async (id) => {
    const td = {id,title,tags}
    const {data} = await axios.put('http://localhost:5555/api/todos',td)
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
     <Button size="small" variant='contained' color='success'onClick={handleClose1}> <EditIcon/></Button>      


         <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: async (event) => {
                            event.preventDefault();
                            await updateTodo(todo._id); 
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
            id="title"
            name="title"
            label="title"
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="tags"
            name="tags"
            label="tags"
            onChange={(e) => setTags(e.target.value)}
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
}

export default UpdateTodo
