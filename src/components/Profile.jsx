import { Link } from 'react-router-dom'
function Profile() {
    return (
        <div className="forum-container">
            <div className="forum-content">

                <h1 className="text-center fw-bolder">User Profile</h1>

                <div className="container card col-10 col-md-8 offset-md-2 my-5 py-5 ">
                    <div className="card-body">
                        <h4 className="fw-bold">Username: Blaise</h4>
                        <h4 className="fw-bold">Fullname: Blaiso kittywfafasf</h4>
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