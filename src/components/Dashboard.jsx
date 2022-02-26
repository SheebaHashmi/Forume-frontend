import Posts from "./Posts";
import {Link} from 'react-router-dom'

function Dashboard(){
   return(
       <div className="forum-container">
           <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    
                    <h1 className="navbar-brand">Forume</h1>

                    <Link to={'/profile'}>
                        <span className="navbar-text">Profile</span>
                    </Link>
                </div>
           </nav>
           <div className="conatiner">
               <div className="row"> 
               <div className="col-12 col-md-5 my-2 offset-md-6">
           <button className="btn btn-primary btn-lg shadow float-end">Start a New Topic</button>
               </div>
               </div>
               <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                    <Posts/>
                    </div>
                </div>

           </div>
           
       </div>
   ) 
}
export default Dashboard;