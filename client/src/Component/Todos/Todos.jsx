import { useEffect, useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import axios from "axios"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/joy/Grid';
import AddIcon from '@mui/icons-material/Add';
import CreateTodo from "./CreateTodo";
import UpdateTodo from "./UpdateTodo";

const Todos = () => {

  const changeComplaite = async (todo) => {
    const { data } = await axios.put(`http://localhost:5555/api/todos/${todo._id}`)
    getAllToodos()
  };

  const [todos, setTodos] = useState([])
  const getAllToodos = async () => {
    const { data } = await axios.get('http://localhost:5555/api/todos')
    setTodos(data)

  }

  useEffect(() => {
    getAllToodos()
  }, [])
  return (
    <>
      <CreateTodo getAllToodos={getAllToodos} />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: '100%', justifyContent: 'center', padding: 2 }}
      >
        {todos.map((todo) => {
          return <Grid>
            <Card variant="outlined" ><CardContent >
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {`id: ${todo._id}`}
              </Typography>
              <Typography variant="h5" component="div">
                {todo.title}
              </Typography>
              <Typography variant="h5" component="div">
                {todo.tags}
              </Typography>
            </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant='contained'
                  color='error'
                  onClick={async () => { await axios.delete(`http://localhost:5555/api/todos/${todo._id}`); await getAllToodos() }} > <DeleteIcon /></Button>
                <UpdateTodo todo={todo} getAllToodos={getAllToodos} />
                <Button size="small" variant='contained' color='warning' disabled={todo.completed} onClick={() => changeComplaite(todo)}>Complaited</Button>
              </CardActions></Card></Grid>
        })}
      </Grid>
    </>
  )
}

export default Todos



