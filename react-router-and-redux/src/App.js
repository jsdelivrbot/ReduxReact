import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h3>About</h3>;
const Users = ({ match }) => <div>{match.url}</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>{" "}
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  </BrowserRouter>
);

export default App;