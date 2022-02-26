import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <div className="Homepage">
      <h1>Welcome to Forume</h1>
      <form>
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

        <Link to={'/register'}>
          <button type="submit">Login</button>
        </Link>
          

      </form>
    </div>
  );
}

export default Homepage;
