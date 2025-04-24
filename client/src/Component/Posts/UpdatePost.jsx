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
import IconButton from '@mui/joy/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
function UpdatePost({ post, getAllPosts }) {

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState(post ? post.title : '');
    const [body, setBody] = React.useState(post ? post.body : '');



    const UpdatePost = async (id) => {
        console.log('UpdatePost');
        const pst = { id, title, body }
        const { data } = await axios.put('http://localhost:5555/api/posts', pst )
        console.log(pst);
        console.log(data);
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
            <IconButton
                variant="soft"
                color="danger"
                size="sm"
                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                onClick={handleClose1}
            >
                <BorderColorIcon />
            </IconButton>

            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: async (event) => {
                            event.preventDefault();
                            await UpdatePost(post._id);
                            handleClose();
                            setTitle('');
                            setBody('')
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
                        id="body"
                        name="body"
                        label="body"
                        onChange={(e) => setBody(e.target.value)}
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

export default UpdatePost
