import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const Navbar = () => (
  <div>
    <NavLink to="/" exact style={link} activeStyle={{ background: "darkblue" }}>
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      Login
    </NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      Messages
    </NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      Sign Up
    </NavLink>
  </div>
);

const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

const Messages = () => <p>Hello World</p>;

const SignUp = () => (
  <div>
    <form>
      Name: <input type="text" placeholder="name" />
      <br />
      Password: <input type="password" placeholder="password" />
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  </div>
);

const Login = () => (
  <div>
    <form>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
);

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
