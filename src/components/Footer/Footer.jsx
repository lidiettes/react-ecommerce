import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer ClassName="footer-bs">
                <div ClassName="row">
                    <div ClassName="col-md-3 footer-brand animated fadeInLeft">
                        <h2>Logo</h2>
                        <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                        <p>© 2014 BS3 UI Kit, All rights reserved</p>
                    </div>
                    <div ClassName="col-md-4 footer-nav animated fadeInUp">
                        <h4>Menu —</h4>
                        <div ClassName="col-md-6">
                            <ul ClassName="pages">
                                <li><a href="#">bueno </a></li>
                                <li><a href="#">asda</a></li>
                                <li><a href="#">534</a></li>
                                <li><a href="#">5345335</a></li>
                                <li><a href="#">534435534</a></li>
                            </ul>
                        </div>
                        <div ClassName="col-md-6">
                            <ul ClassName="list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div ClassName="col-md-2 footer-social animated fadeInDown">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">RSS</a></li>
                        </ul>
                    </div>
                    <div ClassName="col-md-3 footer-ns animated fadeInRight">
                        <h4>Newsletter</h4>
                        <p>A rover wearing a fuzzy suit doesn't alarm the real penguins</p>
                        <p>
                            <div ClassName="input-group">
                                <input type="text" ClassName="form-control" placeholder="Search for..."/>
                                    <span ClassName="input-group-btn">
                                        <button ClassName="btn btn-default" type="button"><span ClassName="glyphicon glyphicon-envelope"></span></button>
                                    </span>
                            </div>
                        </p>
                    </div>
                </div>
            </footer>
        

        
        
        </>
    )
};

export default Footer;