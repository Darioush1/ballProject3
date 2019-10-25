import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import "./Navigation.css";

export default withAuth(
  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) return null;
      const authNav = this.state.authenticated ? (
        <ul className="auth-nav">
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => this.props.auth.logout()}
            >
              Logout
            </a>
          </li>
          
            <Link to="/profile">Profile</Link>
          
        </ul>
      ) : (
        <ul className="auth-nav">
          
            <a
              href="javascript:void(0)"
              onClick={() => this.props.auth.login()}
            >
              Login
            </a>
          
          
            <Link to="/register">  Register</Link>
          
        </ul>
      );
      return (
        <nav>
          <ul>
            
              <Link to="/">Home</Link>
            
            {authNav}
          </ul>
        </nav>
      );
    }
  }
);
