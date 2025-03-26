import { useEffect, useState } from "react"
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import axios from "axios"
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/joy/Grid';
import IconButton from '@mui/joy/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpdatePost from './UpdatePost'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CreatePost from "./CreatePost";


const Posts = () => {


    const [posts, setPosts] = useState([])
    const getAllPosts = async () => {
        const { data } = await axios.get('http://localhost:5555/api/posts')
        setPosts(data)

    }

    useEffect(() => {
        getAllPosts()
    }, [])
    return (
        <>
            <CreatePost getAllPosts={getAllPosts} />
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: '100%', justifyContent: 'center' }}
            >
                {posts.map((post) => {
                    return <Grid sx={{ padding: 4 }}><Card
                        variant="solid"
                        color="neutral"
                        size="lg"
                        sx={{ width: 320, hidth: 320 }}
                    >
                        <div>
                            <Typography level="h3" color="error">
                                {post.title}
                            </Typography>
                        </div>
                        <CardContent orientation="horizontal">
                            <div>
                                <Typography level="body-xs" color="error">
                                    {post.body}
                                </Typography>
                            </div>
                            <div>
                                <UpdatePost post={post} getAllPosts={getAllPosts}/>
                                <IconButton
                                    aria-label="bookmark Bahamas Islands"
                                    variant="soft"
                                    color="success"
                                    size="sm"
                                    sx={{ position: 'absolute', top: '0.875rem', right: '3rem' }}
                                    onClick={async () => { await axios.delete(`http://localhost:5555/api/posts/${post._id}`); await getAllPosts() }} 
                                >
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card></Grid>
                })}
            </Grid>
        </>
    )
}

export default Posts

