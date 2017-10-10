import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearField = this.clearField.bind(this);
  };

  update(key) {
    return (event) => {
      this.setState({[key]: event.target.value});
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({errors: [newProps.errors]})
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/posts'));
  }

  errors() {
    return (
      <ul>
        {
          this.props.errors.map((error) => (
            <li className="errors">{error}</li>
          ))
        }
        </ ul>
    )
  }

  email_field() {
    if (this.props.formType == "signup") {
      return (
        <label>
          <input type="text" value={this.state.email}
                             onChange={this.update("email")}
                              placeholder="email"  />
        </ label>
      )
    }
  }

  clearField(key) {
    return { [key]: "" }
  }

  guestLogin() {
    if (this.props.formType == "login") {
      return (
        <input type="submit"
                className="submit"
                onClick={() => this.setState({
                  username: "guest",
                  email: "guest",
                  password: 'thispassword'
                })}
                value="guest login"/>
      )
    }
  }

  passwordText() {
    if (this.state.password == "password") {
      return "text";
    } else {
      return "password"
    }
  }


  render() {

    return (
      <div className="auth-page">
        <div className="about-container">
          <div className="about">
            <p id="about-head">about expressr.</ p>
          <br />
            <p id="summary">expressr is a way to express yourself through different forms of content.</p>

          </div>
        </div>
        <form onSubmit={this.handleSubmit}>

          <h1 id="form-title">expressr.</h1>
          <h3>{this.props.formType}</h3>

          {this.errors()}

          <label>

            <input type="text" value={this.state.username}
              onChange={this.update("username")}
              placeholder="username" />
          </label>

          {this.email_field()}

            <label>
            <input type={this.passwordText()}
                   value={this.state.password}
                   onChange={this.update("password")}
                   placeholder="password" />
            </ label>

            <div className="submit-buttons">
              <input type="submit" className="submit" value={this.props.formType}/>
              {this.guestLogin()}
            </ div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
