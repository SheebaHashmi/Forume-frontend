import {Link} from 'react-router-dom';
function Homepage() {
    return (
      <div className="Homepage">
        <h1>Create New Account</h1>
        <form>
            <label>Fullname:</label>
            <input
              type="text"
              name="fullname"
            />
            <label>Username:</label>
            <input
              type="text"
              name="username"
            />
            <label>Password:</label>
            <input
              type="text"
              name="password"
            />
            
            <Link to={'/dashboard'}>
            <button type="submit">Submit</button>
            </Link>
  
            
  
        </form>
      </div>
    );
  }
  
  export default Homepage;
  