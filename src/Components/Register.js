import React from 'react'

function Register() {
  return (
<div style={{ marginTop: "100px"}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <div className='card'>
                            <div className='card-body'>
                                <h2>Register</h2>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input placeholder="Email" className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className='form-control' />
                                </div>
                                <button className='btn btn-primary'>Register</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register