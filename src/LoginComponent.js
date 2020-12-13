import React from "react";

import { BrowserRouter, Switch, Route } from  "react-router-dom"


export class LoginComponent extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       err: ''
    }
  }
  

  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (username == 'dada' && password == '123') {
      this.props.history.push('/quiz/' + username);
    } else {
      this.setState({
        err: 'Invalid'
      });
    }
  }
  render() {
    let format = {
      color:"red"
    };
    return (
      <div>
        <h3>Login</h3>
        <span style={format}>{this.state.err != '' ? this.state.err : ''}</span>
        <form method="post" onSubmit={this.login.bind(this)}>
          Username <input type="text" name="username" />
          <br />
          Password <input type="password" name="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
    return (
      <div>
        <h3>Sign Up</h3>
          <input type="submit" value="Register" />
      </div>
    )
  }
  
}

export default LoginComponent
