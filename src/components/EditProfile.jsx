import {Link} from 'react-router-dom';

function EditProfile() {
    return (
      <div className="EditProfile">
        <h1 className="text-center">Edit Profile</h1>
        <form className="container">
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
          <div className="col-12 col-md-3 offset-md-5">
            <Link to={'/profile'}>
            <button className="btn btn-primary" type="submit">Submit</button>
            </Link> 

            </div>
        </div>
            
  
        </form>
      </div>
    );
  }
  
  export default EditProfile;