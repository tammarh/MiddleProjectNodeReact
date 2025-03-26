import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Users  from './Component/Users/Users' 
import Posts from './Component/Posts/Posts' 
import Todos  from './Component/Todos/Todos' 
import Photos from './Component/Photos' 
import NavBar from './Component/NavBar';
function App() {
  return (
    <>
    
    <Router>
    <NavBar/>
    <Routes>
        <Route path="/Users" element={<Users/>}></Route>
        <Route path="/Posts" element={<Posts/>}></Route>
        <Route path="/Todos" element={<Todos/>}></Route>
        <Route path="/Photos" element={<Photos/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
