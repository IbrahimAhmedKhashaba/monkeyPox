import React from 'react'
import { useParams } from 'react-router-dom';
import MainBg from './MainBg';
import doc1 from './imgs/doctor1.jpg';
import doc2 from './imgs/doctor2.jpg';
import doc3 from './imgs/doctor3.jpg';
import doc4 from './imgs/doctor4.jpg';
import doc5 from './imgs/doctor5.jpg';
import doc6 from './imgs/doctor1.jpg';
export default function DoctorBook() {
  let params = useParams();
  let index = params.id;
  var doctors = [
    [doc1, "Naidan Smith", "PEDIATRIC CLINIC" , 0 , "specialized in urology and he’s a Chief of Urology Department at Jordan Hospital and a member of British Urological Association , Jordan Medical Association , Jordanian Society of urological Surgeon and American Urological Association. When I turned 30, because of my father's heart history and my family's inheritance, I vowed to start seeing a cardiologist every year and to be really proactive and take my own heart health into my own hands."],
    [doc2, "Danial Frankie", "DOCTOR" , 1 , "specialized in urology and he’s a Chief of Urology Department at Jordan Hospital and a member of British Urological Association , Jordan Medical Association , Jordanian Society of urological Surgeon and American Urological Association. When I turned 30, because of my father's heart history and my family's inheritance, I vowed to start seeing a cardiologist every year and to be really proactive and take my own heart health into my own hands."],
    [doc3, "Alexa Jhon", "DOCTOR" , 2 , "specialized in urology and he’s a Chief of Urology Department at Jordan Hospital and a member of British Urological Association , Jordan Medical Association , Jordanian Society of urological Surgeon and American Urological Association. When I turned 30, because of my father's heart history and my family's inheritance, I vowed to start seeing a cardiologist every year and to be really proactive and take my own heart health into my own hands."],
    [doc4, "Rihana Roy", "GYNECOLOGY" , 3 , "specialized in urology and he’s a Chief of Urology Department at Jordan Hospital and a member of British Urological Association , Jordan Medical Association , Jordanian Society of urological Surgeon and American Urological Association. When I turned 30, because of my father's heart history and my family's inheritance, I vowed to start seeing a cardiologist every year and to be really proactive and take my own heart health into my own hands."],
    [doc5, "Jason Roy", "NEUROLOGY" , 4 , "specialized in urology and he’s a Chief of Urology Department at Jordan Hospital and a member of British Urological Association , Jordan Medical Association , Jordanian Society of urological Surgeon and American Urological Association. When I turned 30, because of my father's heart history and my family's inheritance, I vowed to start seeing a cardiologist every year and to be really proactive and take my own heart health into my own hands."],
    [doc6, "Nadim Kama", "CARDIOLOGY" , 5 , "specialized in urology and he’s a Chief of Urology Department at Jordan Hospital and a member of British Urological Association , Jordan Medical Association , Jordanian Society of urological Surgeon and American Urological Association. When I turned 30, because of my father's heart history and my family's inheritance, I vowed to start seeing a cardiologist every year and to be really proactive and take my own heart health into my own hands."]
  ];
  return (
    <div>
    <MainBg page = "doctorBook" str = "Book a visit"></MainBg>

      <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-6 my-5">
          <div className='oneDoctor w-75 m-auto'>
                <img className='w-100 border rounded-3' src={doctors[index][0]} alt="" />
                <div className="w-75 m-auto text-center docDetails">
                  <h3 className='fw-bold'>{doctors[index][1]}</h3>
                  <h5>{doctors[index][2]}</h5>
                </div>
              </div>
          </div>
          <div className="col-md-6 my-5">
            <h2 className='fs-1 fw-bold'>{doctors[index][1]}</h2>
            <p className='lh-lg fs-4 fw-normal'>{doctors[index][4]}</p>
          </div>
        </div>
        <div className="w-75 my-5 mx-auto">
          <hr />

        </div>
      </div>

      <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-8 my-5 pt-5">
              <p className='lh-lg fs-4 text-secondary'>Most of the 30 ages by trying and Britain, the fields of Marr approaching may, non-universal government Britain did not. This reference and innocent Korean is. It 
              mobilizes the responsibility of a side, with 30 was a slogan, but rather as a failure to 
              defend treaties. Downward stubbornness has approached, here? Responsibility to 
              fulfill. From ships to shores and ending cities, both with and even for advertising. The 
              famous attention and Russian no lost, lack of plan attributed the count of 30. As it 
              was a surprise, the count rose, from his approach, to impose European treatment. 
              About the sixth chapter of the pain of the powers, from and he was assigned despite. 
              30 islands weeks wikipedia, lost, union theater be about. He did all and some 
              relationship, he chose and Poland the third, with and did not.</p>
          </div>
          <div className="col-md-4 my-5">
            <div className='border border-3 px-3 py-1'>
              <div className='mb-1'>
                <span className='fs-4 border-bottom border-danger fw-bold'>Book a visit</span>
              </div>
              <div className='mb-2'>
                <span className='fs-4 pb-2 fw-bold text-danger'>Work Hours: </span>
              </div>
              <div className='d-flex justify-content-between me-3'>
                <span className='fw-semibold'>sunday - Tuesday</span>
                <span className='fw-semibold'>8:00 AM 7:00 – PM</span>
              </div>
              <div className=" mx-1">
                <hr />
              </div>

              <div className='d-flex justify-content-between me-3'>
                <span className='fw-semibold'>sunday - Tuesday</span>
                <span className='fw-semibold'>8:00 AM 7:00 – PM</span>
              </div>
              <div className=" mx-1">
                <hr />
              </div>

              <div className='d-flex justify-content-between me-3'>
                <span className='fw-semibold'>sunday - Tuesday</span>
                <span className='fw-semibold'>8:00 AM 7:00 – PM</span>
              </div>
              <div className=" mx-1">
                <hr />
              </div>

              <div className='d-flex justify-content-between me-3'>
                <span className='fw-semibold'>sunday - Tuesday</span>
                <span className='fw-semibold'>8:00 AM 7:00 – PM</span>
              </div>
              
              <div className='mb-2 mt-4'>
                <span className='fs-4 border-bottom border-danger fw-bold text-danger'>Call Us</span>
              </div>
              

              <div className="d-flex ms-4">
                <div>
                {/* <i class="fa-light fa-mobile fs-1 text-dark"></i> */}
                <i className="fa-solid fa-mobile-retro fs-1 mt-2 pinkHover"></i>
                  {/* <i className="fa-thin fa-mobile "></i> */}
                </div>
                <div className='ms-3'>
                  <p className='mb-1'>Contact us at any time</p>
                  <p>0-800-2336-7820</p>
                </div>
              </div>

              <div className="w-75 m-auto">
                <hr />
              </div>

              <div className="d-flex ms-4">
                <div>
                  <i className="fa-solid fa-envelope fs-2 mt-2 pinkHover"></i>
                  {/* <i className="fa-thin fa-mobile-screen fs-1 text-dark"></i> */}
                </div>
                <div className='ms-3'>
                  <p className='mb-1'>Send email</p>
                  <p>Naidan Smith@medicare.com</p>
                </div>
              </div>

              <div className="w-75 m-auto">
                <hr />
              </div>

              <div className="d-flex ms-4">
                <div>
                  {/* <i className="fa-thin fa-mobile-screen fs-1 text-dark"></i> */}
                  <i className="fa-solid fa-square-plus  fs-2 mt-2 pinkHover"></i>
                </div>
                <div className='ms-3'>
                  <p className='mb-1'>Book the appointment</p>
                  <p>Click here to book an appointment with
                  Dr. Naidan Smith.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-75 my-5 mx-auto">
          <hr />
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h3 className='mb-5 fw-bold fs-2'><span className='border-bottom border-3 border-dark'>Certification</span></h3>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  <p className='fs-5'>In November 2022, the board agreed, granting Eversource a
                  special certificate and clearing the way for a groundbreaking.</p>
                  <h5 className='fw-bold fs-5'>Ashley Soebroto, BostonGlobe.com, 20 Feb. 2023</h5>
                </div>
              </div>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  <p className='fs-5'>In November 2022, the board agreed, granting Eversource a
                  special certificate and clearing the way for a groundbreaking.</p>
                  <h5 className='fw-bold fs-5'>Ashley Soebroto, BostonGlobe.com, 20 Feb. 2023</h5>
                </div>
              </div>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  <p className='fs-5'>In November 2022, the board agreed, granting Eversource a
                  special certificate and clearing the way for a groundbreaking.</p>
                  <h5 className='fw-bold fs-5'>Ashley Soebroto, BostonGlobe.com, 20 Feb. 2023</h5>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 border-start ps-3">
          <div>
              <h3 className='mb-5 fw-bold fs-2'><span className='border-bottom border-3 border-dark'>Awards</span></h3>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  
                  <h5 className='fw-bold fs-5'>Sheikh Hamdan bin Rashid Al Maktoum International
                  Grand Prize</h5>
                </div>
              </div>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  
                  <h5 className='fw-bold fs-5'>Sheikh Hamdan bin Rashid Al Maktoum International
                  Grand Prize</h5>
                </div>
              </div>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  
                  <h5 className='fw-bold fs-5'>Sheikh Hamdan bin Rashid Al Maktoum International
                  Grand Prize</h5>
                </div>
              </div>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  
                  <h5 className='fw-bold fs-5'>Sheikh Hamdan bin Rashid Al Maktoum International
                  Grand Prize</h5>
                </div>
              </div>
              <div className="d-flex mb-5">
                <i className="fa-solid fa-graduation-cap fs-4 mt-2 pinkHover"></i>
                <div className='ms-3'>
                  
                  <h5 className='fw-bold fs-5'>Sheikh Hamdan bin Rashid Al Maktoum International
                  Grand Prize</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
