import { useEffect, useState } from "react"
import * as React from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import CreateUser from "./CreateUser";
import { Button } from '@mui/material';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
const AllUsers = ()=>{

  const [messege,setMessege] = React.useState('')
    //const item =  { title: 'Deleted', color: 'success', icon: <CheckCircleIcon /> }
    const deleteUser = async (username) =>{
        try {
            const { data } = await axios.delete('http://localhost:5555/api/users',  { username });
            setMessege(data);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
        getallusers()
    };

    React.useEffect(()=>{
        deleteUser()
    },[])
    const [users, setUsers] = useState([]); 
    const [delte, setDelete] = useState(null); 
    const [update, setUpdate] = useState(null); 


    const getallusers = async ()=>{
        const {data} = await axios.get('http://localhost:5555/api/users') 
        setUsers(data)
    }
    
    useEffect(()=>{
        getallusers()
    },[])

      return (
        <> 

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell  sx={{ fontSize: '20px', color: 'purple' , fontFamily: 'Arial, sans-serif' ,fontWeight: 'bold'}}>User name</TableCell>
                <TableCell align="center"  sx={{ fontSize: '20px', color: 'purple' , fontFamily: 'Arial, sans-serif' ,fontWeight: 'bold' }}>Name</TableCell>
                <TableCell align="center"  sx={{ fontSize: '20px', color: 'purple' , fontFamily: 'Arial, sans-serif' ,fontWeight: 'bold' }}>Address</TableCell>
                <TableCell align="center"  sx={{ fontSize: '20px', color: 'purple' , fontFamily: 'Arial, sans-serif' ,fontWeight: 'bold'}}>Email</TableCell>
                <TableCell align="center"  sx={{ fontSize: '20px', color: 'purple' , fontFamily: 'Arial, sans-serif',fontWeight: 'bold' }}>Phone</TableCell>
                <TableCell align="center"  sx={{ fontSize: '20px', color: 'purple' , fontFamily: 'Arial, sans-serif',fontWeight: 'bold' }}>Delete</TableCell>
                <TableCell align="center"  sx={{ fontSize: '20px', color: 'purple' , fontFamily: 'Arial, sans-serif' , fontWeight: 'bold' }}>Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
            <TableRow
              key={user.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">  {user.username}    </TableCell>
              <TableCell align="center" >{user.name}</TableCell>
                  <TableCell align="center">{user.address}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.phone}</TableCell>    
              <TableCell align="center">
                <IconButton
                  aria-label="delete"
                  color="danger"
                  size="lg"
                  onClick={async () =>{await axios.delete(`http://localhost:5555/api/users/${user._id}`) ; await getallusers()}}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
               {/* {delte===user.username && <DeleteUser setDelete={setDelete} delte={delte} getallusers={getallusers} username={user.username}/>} */}
              <TableCell align="center">
                {/* <IconButton
                  aria-label="update"
                  color="primary"
                  size="lg"
                  onClick={() => {setUpdate(user.username);}}
                >       <AddToQueueOutlinedIcon/> 
                  </IconButton>  */}
                  <UpdateUser user={user} getallusers={getallusers}/>
              </TableCell> 
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <CreateUser  getallusers={getallusers} />

              
            
        </>
      );
    }

export default AllUsers

