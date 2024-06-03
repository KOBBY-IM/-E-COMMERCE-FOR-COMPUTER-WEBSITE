import React , { useState }from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  return (
  <>
    <div className={css(styles.login)}>
        <p>Create your new account</p>
        <form className={css(styles.login)}>
          <label htmlFor='firstt name'>First Name: </label>
            <input 
              className={css(styles.textBox)}
              type='name'
              name='firstName'
              id='firstName'
              onChange= { (e) => setFirstName(e.target.value)}
              />
            <label htmlFor='last name'>Last Name: </label>
            <input 
              className={css(styles.textBox)}
              type='name'
              name='lastName'
              id='lastName'
              onChange= { (e) => setLastName(e.target.value)}
              />
              <label htmlFor='email'>Email: </label>
            <input 
              className={css(styles.textBox)}
              type='email'
              name='email'
              id='email'
              onChange= { (e) => setEmail(e.target.value)}
              />
              <label htmlFor='email'>Password: </label>
            <input 
              className={css(styles.textBox)}
              type='password'
              name='password'
              id='password'
              onChange= { (e) => setPassword(e.target.value)}
              />
              <label htmlFor='email'>Confirm password: </label>
            <input 
              className={css(styles.textBox)}
              type='password'
              name='repassword'
              id='repassword'
              onChange= { (e) => setPassword(e.target.value)}
              />
            <input
              className={css(styles.submit)}
              type='submit'
              value='Sign Up'
              />
          </form>
        </div>
        <div>
          <p>
            Already got an account? <Link to='/login'>Log In</Link>
          </p>
        </div>
    </>
  );
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

export default SignUp;
