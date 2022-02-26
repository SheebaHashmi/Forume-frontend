import { Link } from 'react-router-dom'
function Profile() {
    return (
        <div className="forum-container">
            <div className="forum-content">

            <h1 className="text-center">User Profile</h1>
            <div className="card col-12 col-md-8 offset-md-2 my-5 p-4">
                <div className="card-body">
                        <h4>Username: Blaise</h4>
                        <h4>Fullname: Makebelieve flamming Blaise</h4>
                        <Link to={'/editProfile'}>
                            <button className="btn btn-primary px-5 mt-4">Edit Profile</button>
                        </Link>

                </div>

            </div>
            </div>
        </div>
    )
}
export default Profile;