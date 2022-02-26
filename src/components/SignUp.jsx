import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="forum-container">
      <div className="forum-content">
      <h1 className="text-center">Create New Account</h1>
      <form className="container card col-10 col-md-8 offset-md-2 my-5 p-4">
        <div className="row">
          <div className="col-12 col-md-6 mb-2 offset-md-3">
            <label className="form-label">Fullname: </label>
            <input
              type="text"
              name="fullname"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-2 offset-md-3">
            <label className="form-label">Email: </label>
            <input
              type="text"
              name="email"
              className="form-control"
            />
          </div>

        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-2 offset-md-3">
            <label className="form-label">Username: </label>
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
                <div className="col-12 col-md-3 offset-md-5 mt-3">
        <Link to={'/dashboard'}>
          <button className="btn btn-primary px-5" type="submit">Submit</button>
        </Link>
                </div>
        </div>

      </form>
      </div>
    </div>
  );
}

export default SignUp;
