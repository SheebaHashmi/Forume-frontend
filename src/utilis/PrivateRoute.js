import React from "react";
import { Navigate} from 'react-router-dom'

function PrivateRoute(props){
    const {children} = props
   
    if(localStorage.getItem('token')){
        return children
    }else{
        return <Navigate to="/" replace/>
    }
               
    
}


export default PrivateRoute;