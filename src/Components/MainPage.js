import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className="container-fluid">
      {/* <h1>Main Page</h1> */}
      <div className="main-page">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">My Note App</h1>
          <p className="col-md-8 fs-4">Easy and simple way to store your notes</p>
          <Link to="/login">
            <button className="btn btn-primary btn-lg" type="button">
              Save your notes now
            </button>
          </Link>
        </div>
      </div>

      <hr />

      <div className="container text-center feature">
        <div className="row">
          <div className="col">
            <img className="image-1" src={require('./easy-to-use.png')} alt="" />
            <h2>Easy</h2>
            <p>Just sign up and you're ready to go</p>
          </div>
          <div className="col">
            <img className="image-1" src={require('./free.png')} alt="" />
            <h2>Free</h2>
            <p>No need to pay anything</p>
          </div>
          <div className="col">
            <img className="image-1" src={require('./booking.png')} alt="" />
            <h2>Easy</h2>
            <p>Can be used everywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
