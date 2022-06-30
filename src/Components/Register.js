import React from 'react';
// import { Container } from 'react-bootstrap';
import './Register.css';

function Register({ setUsername, setPassword, handleRegister, isLogin, email, setEmail }) {
  return (
    <div className="container w-50 register-page mt-5 p-5 shadow-lg">
      <h2 className="text-center mb-5">Register</h2>
      <hr />
      <img className="pencil" src={require('./pencil_icon.png')} alt="" />
      <form onSubmit={handleRegister} className="register-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input required type="email" className="form-control shadow-md" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <hr />
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input required type="text" className="form-control shadow-md" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <hr />
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control shadow-md" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <hr />
        <div className="button-form">
          <button className="btn btn-primary text-center" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;

/* 
<div style={{ marginTop: '100px' }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div className="card">
              <div className="card-body">
                <h2>Register</h2>
                <div className="form-group">
                  <label>Email</label>
                  <input type='email' placeholder="Email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type='text' placeholder="Username" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Password" className="form-control" />
                </div>
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
