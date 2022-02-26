import Posts from "./Posts";

function Dashboard() {
    return (
        <div className="forum-container">
            
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand fw-bolder">Forume</h1>
                    <a className="navbar-text text-decoration-none fw-bold" href="/profile">Profile</a>
                </div>
            </nav>

            <div className="conatiner">

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