import React from 'react';

function Register({ username, setUsername, password, setPassword, handleRegister, isLogin}) {
    
  return (
    <div className='container'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
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