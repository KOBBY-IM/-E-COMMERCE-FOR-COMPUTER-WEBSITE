import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmitState = this.handleSubmitState.bind(this);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }
  
  handleSubmitState() {
    if (this.state.email !== "" && this.state.password !== ""){
      this.setState({ enableSubmit: true})
    } else {
      this.setState({ enableSubmit: false})
    }
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.handleSubmitState);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.handleSubmitState);
  }

  render() {
    return (
      <>
        <div className={css(styles.login)}>
          <p>Login to access full functionality:</p>
          <form className={css(styles.login)}>
            <label htmlFor='email'>Email: </label>
            <input 
              className={css(styles.textBox)}
              type='email'
              name='email'
              id='email'
              onChange={this.handleChangeEmail}
              value={this.state.email}
              />
            <label htmlFor='password'>Password: </label>
            <input
              className={css(styles.textBox)}
              type='password'
              name='=password'
              id='password'
              onChange={this.handleChangePassword}
              value={this.state.password}
              />
            <input
              className={css(styles.submit)}
              type='submit'
              value='Log In'
              onClick={this.handleLoginSubmit}
              disabled={!this.state.enableSubmit}
              />
          </form>
        </div>
        <div>
          <p>
            No Account yet? <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </> 
    );
  }
}


const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px auto 0',
    alignItems: 'center',
    gap: '.8rem',
  },
  textBox: {
    borderRadius: '10px',
    height: '2rem',
    width: 'calc(100% + 2em)'
  },
  submit: {
    fontSize: '1.1rem',
    borderRadius: '8px'
  }
});

export default Login;
