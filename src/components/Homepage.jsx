import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="Homepage">
            <h1 className="text-center">Welcome to Forume</h1>
            <form className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-2 offset-md-3">
                        <label className="form-label">Username:</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                        />

                    </div>

                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-2 offset-md-3">
                        <label className="form-label">Password: </label>
                        <input
                            type="text"
                            name="password"
                            className="form-control"
                        />

                    </div>

                </div>
                <div className="row">
                <div className="col-12 col-md-3 offset-md-5">

                        <Link to={'/register'}>
                            <button className="btn btn-primary" type="submit">Login</button>
                        </Link>
                </div>
                </div>





            </form>
        </div>
    );
}

export default Homepage;
