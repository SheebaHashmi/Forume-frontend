import Posts from "./Posts";
import {useEffect} from 'react'
import axiosWithAuth from "../utilis/axiosWithAuth";

function Dashboard() {

    // useEffect(()=> {
    //     axiosWithAuth().get()
    // })

    return (
        <div className="forum-container">
            
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand fw-bolder">Forume</h1>
                    <div>
                    <a className="navbar-text text-decoration-none fw-bold mx-2" href="/private/profile">Profile</a>
                    <a className="navbar-text text-decoration-none fw-bold" href="/private/logout">Logout</a>

                    </div>
                </div>
            </nav>

            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-5 my-2 offset-md-6">
                        <button className="btn btn-primary btn-lg mt-2 mx-3 shadow float-end">Start a New Topic</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <Posts />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Dashboard;