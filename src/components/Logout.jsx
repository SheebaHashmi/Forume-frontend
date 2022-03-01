import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'; 
import axiosWithAuth from '../utilis/axiosWithAuth';

function Logout(){
    let navigate = useNavigate()

    useEffect(()=> {
        axiosWithAuth().post('/logout')
        .then(res => {
            window.localStorage.removeItem('token')
            navigate('/login')
        })
        .catch(err => console.log(err))
    },[])

    return(<div></div>) 
 }
 export default Logout;