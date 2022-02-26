import Posts from "./Posts";
import {Link} from 'react-router-dom'
function Dashboard(){
   return(
       <div>
           <Link to={'/profile'}>
               <p>Profile</p>
           </Link>
           <button>Start a New Topic</button>
           <Posts/>
           
       </div>
   ) 
}
export default Dashboard;