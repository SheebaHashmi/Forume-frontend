import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import SignUp from './components/SignUp' 
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Logout from './components/Logout'
import AddPost from './components/AddPost';

let initialValues = {
  fullname:'',
  username:'',
  email:'',
  password:'',
}


function App() {

  const [formValues, setFormValues] = useState(initialValues)
  const [user,setUser] = useState({})
  const [posts,setPosts] = useState([])
  const [post,setPost] = useState({post_title:'',post_body:''})
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route exact path = "/private/dashboard"  
            element={
            <Dashboard 
            posts={posts}
            setPosts={setPosts}
            />}
            />
          <Route exact path = "/private/profile" element={
              <Profile
               formValues = {formValues}
              />
            }
            />
          <Route exact path = "/private/editProfile" element={
            <EditProfile 
              formValues = {formValues}
              setFormValues={setFormValues}
            />
          }/> 
          <Route exact path = "/private/addPost" element={
            <AddPost 
              post ={post} 
              setPost={setPost}
            />
            }/> 

          <Route exact path = "/private/logout" element={
            <Logout 
              setFormValues={setFormValues}
            />
            }/> 
          <Route exact path = "/register" element={
            <SignUp
              formValues = {formValues}
              setFormValues={setFormValues}
            />
            }/>
          
          <Route exact path = "/" 
            element={
              <Homepage
                formValues={formValues}
                setUser={setUser}
                setFormValues={setFormValues}
               />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
