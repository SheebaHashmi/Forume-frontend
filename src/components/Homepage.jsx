import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="forum-container">
            <div className="forum-content">
                <h1 className="text-center fw-bolder">Welcome to Forume</h1>
                <form className="container card col-10 col-md-8 offset-md-2 my-5 p-4">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Username:</label>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Password: </label>
                            <input
                                type="text"
                                name="password"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 offset-md-5 mt-3">
                            <Link to={'/dashboard'}>
                                <button className="btn btn-primary px-5 mb-3" type="submit">Login</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 offset-md-5">
                            <a className="text-decoration-none fw-bold" href="/register">Create new account</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Homepage;
