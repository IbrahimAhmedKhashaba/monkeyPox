import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import navLogo from './imgs/navLogo.jpg'
export default function Navbar() {
  $(window).scroll(function(){
    // console.log($("#main-nav").offset().top);
    let wscroll = $(window).scrollTop();
    if(50 < wscroll){
      $("#main-nav").css('position' , 'fixed');
      $("#main-nav").css('top' , '0');
      $("#main-nav").css('width' , '100%');
      $("#main-nav").css('z-index' , '99999');
      // $("#main-nav").css('background-color' , '#f8f9fa !important');

    } 
    else {
      // $("#main-nav").css('position' , 'static');
      // $("#main-nav").css("background-color" , "#fff");
          $("#main-nav").removeAttr("style")
    }


  })

  // $(".icons").toggle(
  //   function(){$(".links ul").css({"display": "none"});},
  //   function(){$(".links ul").css({"display": "inline"});},
  //   // function(){$(".links ul").css({"display": "none"});}
    
  // );


//   $( ".icons" ).click(function() {     
//     if($('.links ul:visible').length)
//         $('.links ul').hide("slide", { direction: "right" }, 1000);
//     else
//         $('.links ul').show("slide", { direction: "right" }, 1000);        
// });
// $(".icons").click(function(){
//   if(!$('.listDis').hasClass("d-none")) { 
//     $(".listDis").removeClass("d-none");
//     $(".listDis").removeClass("d-block");
//   }
//   else {
//     $(".listDis").removeClass("d-block");
//     $(".listDis").addClass("d-none");
//   }
// });
  return (
<>
    <section className='navSection text-white'>
      <div className='d-flex justify-content-between navIcons'>
        <div className='ms-5 d-flex pt-3 navIconsConnection'>
          <p className='fs-5 me-5 '><i className="fa-solid fa-phone me-2 pinkHover"></i><span className='pinkHover disHidden'>+1800-001-658</span></p>
          <p className='fs-5 '><i className="fa-solid fa-envelope me-2 pinkHover"></i><span className='pinkHover disHidden'>info@modern-academy.com</span></p>
        </div>


        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid navv">
    
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-dark" id="navbarSupportedContent1">
              <ul className="navbar-nav ms-auto me-5 d-flex align-items-center mb-lg-0 text-white">
                <li className="nav-item fs-5 fw-bold">
                    <i className="fa-brands fa-facebook-f p-3 fs-4 pinkHover"></i>
                </li>
                <li className="nav-item fs-5 fw-bold">
                  <i className="fa-brands fa-google-plus-g p-3 fs-4 pinkHover"></i>
                </li>
                <li className="nav-item fs-5 fw-bold">
                  <i className="fa-brands fa-instagram p-3 fs-4 pinkHover"></i>
                </li>
                <li className="nav-item fs-5 fw-bold">
                  <i className="fa-brands fa-twitter p-3 fs-4 pinkHover"></i>
                </li>
                
        </ul>
            </div>
          </div>
        </nav>

      </div>
    </section>

    <nav id='main-nav' className="navbar navbar-expand-lg">
      <div className="container-fluid navv">
        <div className='d-flex ms-5 fw-bold'>
        <Link aria-current="page" to='home'><img src={navLogo} alt="" /></Link>
        
        <Link className="navbar-brand fs-4 disHidden" to='/'>MonkeyPox Detection</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-dark" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 d-flex align-items-center mb-lg-0">
            <li className="nav-item fs-5 fw-bold">
              <Link className="nav-link listnav blueHover" aria-current="page" to='home'>Home</Link>
            </li>
            <li className="nav-item fs-5 fw-bold">
              <Link className="nav-link listnav blueHover" to='about'>About</Link>
            </li>
            <li className="nav-item fs-5 fw-bold">
              <Link className="nav-link listnav blueHover" to='news'>News</Link>
            </li>
            <li className="nav-item fs-5 fw-bold">
              <Link className="nav-link listnav blueHover" to='contact'>Contact us</Link>
            </li>
            <li className="nav-item fs-5 fw-bold">
              <Link className="nav-link listnav blueHover" to='register'>Register</Link>
            </li>
            <li className="nav-item fs-5 fw-bold">
              <Link className="nav-link listnav blueHover" to='faq'>FAQ</Link>
            </li>
            
            <li className="nav-item fs-5 fw-bold ms-3">
              <div className="btn-group">
                <div className="links position-relative">
                  <span className="icons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <ul className='text-center'>
                    <li><Link className="dropdown-item" to='diagnosis'><span className='fs-5 fw-bold  blueHover'>Diagnosis</span> </Link></li>
                    <li><Link className="dropdown-item" to='prevention'><span className='fs-5 fw-bold  blueHover'>Prevention</span></Link></li>
                    <li><Link className="dropdown-item" to='doctors'><span className='fs-5 fw-bold  blueHover'>Doctors</span></Link></li>
                    <li><Link className="dropdown-item" to='applydoctor'><span className='fs-5 fw-bold  blueHover'>Apply Doctor</span></Link></li>
                    <li><Link className="dropdown-item" to='history'><span className='fs-5 fw-bold  blueHover'>History</span></Link></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</>
  )
}