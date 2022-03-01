import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'; 

function Logout(props){
  let navigate = useNavigate()
    const {setFormValues} = props

    useEffect(()=> {
       localStorage.removeItem('token')
       navigate('/')
       setFormValues("")
       
    },[navigate,setFormValues])

    return(<div></div>) 
 }
 export default Logout;