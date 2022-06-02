import React from 'react';
import './LoginPage.css';

function LoginPage() {
    return (
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-7">
            <div class="form d-flex justify-content-between">
              <div class="image">
                <img src={require('./bg-login-left.jpg')} alt='bg-login'></img>
              </div>
              <form action="" class="my-form">
                <h4 class="font-weight-bold mb-3">Login  account</h4>
                <p class="mdb-color-text">To log in, please fill in these text fiels with your e-mail address and password.</p>
                {/* <!-- Email address --> */}
                <div class="md-form md-outline">
                  <i class="fas fa-envelope prefix"></i>
                  <input type="email" id="emailExample" class="form-control" placeholder='Email'></input>
                  
                </div>
                {/* <!-- Password --> */}
                <div class="md-form md-outline">
                  <i class="fas fa-lock prefix"></i>
                  <input type="password" id="passwordExample" class="form-control" placeholder='Password'></input>
                </div>
                <div class="space">
                  <div class="float-right">
                    <center>
                      <button class="btn btn-rounded" type="button">Log in</button>
                    </center>
                  </div>
                </div>
                <hr></hr>
                <a class="link" href="#!">Didn't have account? Click here to Register</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  export default LoginPage;