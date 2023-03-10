import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from './imgs/navLogo.jpg';
import footerImg from './imgs/footerImg.jpg';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
export default function Footer() {
    
  return (
<div className="footer text-light">
        <div className="container p-3">
            <div className="row">
                <div className="col-md-3 footerSec">
                    <div>
                        <div className='d-flex mb-2'>
                            <img className='footerLogo' src={navLogo} alt="" />
                            <Link className="navbar-brand ms-2" to='/'>Monkey Pox Detection</Link>
                        </div>
                        <div>
                            <p>Monkeypox virus is an enveloped double-stranded DNA virus that belongs to the Orthopoxvirus genus of the Poxviridae family</p>
                        </div>
                        <div className='footerIcons d-flex justify-content-around'>
                            <i className="fa-brands fa-facebook-f pinkHover"></i>
                            <i className="fa-brands fa-google-plus-g pinkHover"></i>
                            <i className="fa-brands fa-instagram pinkHover"></i>
                            <i className="fa-brands fa-twitter pinkHover"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 footerSec">
                    <div className="ms-5">
                        <h5>customer services</h5>
                    </div>
                    <div className="d-flex  justify-content-around">
                        <div>
                            <Link className="nav-link listnav my-3" to='home'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> Home</span> </Link>
                            <Link className="nav-link listnav my-3" to='about'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> About</span> </Link>
                            <Link className="nav-link listnav my-3" to='news'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> News</span></Link>
                            <Link className="nav-link listnav my-3" to='history'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> History</span></Link>
                            
                        </div>
                        <div>
                            <Link className="nav-link listnav my-3" to='contact'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> contact us</span> </Link>
                            <Link className="nav-link listnav my-3" to='diagnosis'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> Diagnosis</span> </Link>
                            <Link className="nav-link listnav my-3" to='prevention'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> Prevention</span></Link>
                            <Link className="nav-link listnav my-3" to='doctors'><i className="fa-solid fa-angle-right  pinkHover"></i><span className=' pinkHover'> Doctors</span></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="col-md-3 footerSec">
                    <h5>News</h5>
                    <div className='section3 d-flex mt-4'>
                        <img src={footerImg} alt=""/>
                        <div className='ms-3'>
                            <div className='d-flex pt-2'>
                                <i className="fa-solid fa-calendar-week me-2 pinkHover"></i>
                                <h6>July 6, 2022</h6>
                            </div>
                            <p>How is monkeypox treated?</p>
                        </div>
                    </div>

                    <div className='section3 d-flex'>
                        <img src={footerImg} alt=""/>
                        <div className='ms-3'>
                            <div className='d-flex pt-2'>
                                <i className="fa-solid fa-calendar-week me-2 pinkHover"></i>
                                <h6>July 6, 2022</h6>
                            </div>
                            <p>How is monkeypox treated?</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 footerSec">
                    <div >
                        <h5>contact us</h5>
                        <div className='mt-4'>
                            <p><i className="fa-solid fa-phone me-3 pinkHover"></i><span className='pinkHover'>+1800-001-658</span></p>
                            <p><i className="fa-solid fa-envelope me-3 pinkHover"></i><span className='pinkHover'>info@modern-academy.com</span></p>
                            <div className="d-flex">

                            <i className="fa-solid fa-location-dot me-3 mt-2 pinkHover"></i>
                                <p><span className='pinkHover'>The Queen's Walk, Bishop's,
                                    London SE1 7PB, United
                                    Kingdom.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mx-5'>
            <hr />
        </div>

        <div className='text-center pb-1'>
            <p className='fw-bold'>Copyright 2023© <span  className='pinkHover copyrightApp'>MonkeyPox</span> All Right Reserved</p>
        </div>
</div>
)
}
