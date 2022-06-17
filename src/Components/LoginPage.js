import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage({ username, setUsername, password, setPassword, handleLogin}) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <div className="form d-flex justify-content-between">
            <div className="image">
              <img src={require('./bg-login-left.jpg')} alt="bg-login"></img>
            </div>
            <form action="" className="my-form" onSubmit={handleLogin}>
              <h4 className="font-weight-bold mb-3">Login account</h4>
              <p className="mdb-color-text">To log in, please fill in these text fiels with your e-mail address and password.</p>
              {/* <!-- Email address --> */}
              <div className="md-form md-outline">
                <i className="fas fa-envelope prefix"></i>
                <input type="text" id="emailExample" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
              </div>
              {/* <!-- Password --> */}
              <div className="md-form md-outline">
                <i className="fas fa-lock prefix"></i>
                <input type="password" id="passwordExample" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className="space">
                <div className="float-right">
                  <center>
                    <button className="btn btn-rounded" type="submit">
                      Log in
                    </button>
                  </center>
                </div>
              </div>
              <hr></hr>
              <Link to="/register">Didn't have account? Click here to Register</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;