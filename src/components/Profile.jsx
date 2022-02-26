import {Link} from 'react-router-dom'
function Profile(){
    return(
        <div>
            <h1>User Profile</h1>
            <h4>Username: Blaise</h4>
            <h4>Fullname: Makebelieve flamming Blaise</h4>
            <Link to={'/editProfile'}>
            <button>Edit Profile</button>
            </Link>
        </div>
    ) 
 }
 export default Profile;