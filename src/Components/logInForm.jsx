import React, { Component } from "react";

class LogInFrom extends Component {
  state = {
    account: { userName: "", pass: "" }
  };
  userName = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    console.log("submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    return (
      <div className="loginContainer">
        <h1>LogIn</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="UserName">User Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.account.userName}
              autoFocus
              name="userName"
              ref={this.userName}
              id="UserName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="PassWord">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.account.pass}
              name="pass"
              id="PassWord"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LogInFrom;
