import React from "react";
import { Routes,Route,Navigate} from 'react-router-dom'

function PrivateRoute(props){
    const {children, ...rest} = props
    return (
        <Routes>
            <Route
                {...rest}
                render = {()=> {
                    if(localStorage.getItem('token')){
                        return children
                    }else{
                        return <Navigate to="/"/>
                    }
                }}
            />
        </Routes>
    )
}


export default PrivateRoute;