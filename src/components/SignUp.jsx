import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="forum-container">
      <div className="forum-content">
        <h1 className="text-center fw-bolder">Create New Account</h1>
        <form className="container card my-5 py-4">

          <div className="row">
            <div className="col-12 col-md-6 mb-2 offset-md-3">
              <label className="form-label fw-bold">Fullname: </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
              />
            </div>
            
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-2 offset-md-3">
              <label className="form-label fw-bold">Email: </label>
              <input
                type="text"
                name="email"
                className="form-control"
              />
            </div>

          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-2 offset-md-3">
              <label className="form-label fw-bold">Username: </label>
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
