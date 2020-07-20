import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container mr-1">
                    <div className="row">
                        <div className="col-md-3">
                           <h5>Category</h5>
                           <p>Home</p>
                           <p>Contact Us</p>
                           <p>Listings</p>
                           
                           
                        </div>
                        <div className="col-md-3">
                           <h5>Your Account</h5>
                           <p>Sign Up</p>
                           <p>Log In</p>
                           <p>Find a Space</p>
                           <p>List a Space</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Company</h5>
                            <p>About</p>
                            <p>Meet the Team</p>
                            <p>Contribute</p>
                           
                        </div>
                        <div className="col-md-3">
                            <h5>Social</h5>
                            <p><i className="fa fa-facebook-f" aria-hidden="true" style={{fontSize:"22px"}}></i></p>
                            <p><i className="fa fa-instagram" aria-hidden="true" style={{fontSize:"22px"}}></i></p>
                            <p><i className="fa fa-linkedin" aria-hidden="true" style={{fontSize:"22px"}}></i></p>
                            <p><i className="fa fa-pinterest" aria-hidden="true" style={{fontSize:"22px"}}></i></p>
                        </div>
                    </div>
                </div>
                <div className='footer '>
                    <span><a  href="/"><img className="logoImage" src='https://aperfectspace.com/images/new-home-logo-black.png' alt='logo' /></a></span>
                    <span style={{marginLeft:'135px'}}>
                    <a>&copy; 2020, A Perfect Space  </a>
                    <a>Cookies  </a>
                    <a>Terms and Privacy</a>
                   </span>
                </div>
            </footer>
        )
    }
}

export default Footer; 