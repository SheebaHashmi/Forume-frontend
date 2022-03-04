import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axiosWithAuth from '../utilis/axiosWithAuth'
import Navbar from './Navbar'


function Profile(props) {
    const username = window.localStorage.getItem('username')
    const [profile, setProfile] = useState({ fullname: '', email: '', password: '' })

    useEffect(() => {
        axiosWithAuth().get(`https://forume-backend.herokuapp.com/api/${username}/profile`)
            .then(res => setProfile(res.data))
    }, [])


    return (
        <div className="forum-container">
            <Navbar />

            <div className="forum-content">

                <h1 className="text-center fw-bolder">User Profile</h1>

                <div className="container card col-11 my-5 p-5">
                    <div className="card-body">
                        <h4 className="fw-bold">Username: {username || profile.username}</h4>
                        <h4 className="fw-bold">Fullname: {profile.fullname}</h4>
                        <h4 className="fw-bold">Email: {profile.email}</h4>
                        <Link to={'/profile/edit'}>
                            <button className="btn btn-primary px-5 mt-4">Edit Profile</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Profile;