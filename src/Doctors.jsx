import React from 'react'
import MainBg from './MainBg';
import doc1 from './imgs/doctor1.jpg';
import doc2 from './imgs/doctor2.jpg';
import doc3 from './imgs/doctor3.jpg';
import doc4 from './imgs/doctor4.jpg';
import doc5 from './imgs/doctor5.jpg';
import doc6 from './imgs/doctor1.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Doctors() {
  const [doctorsDetails , setDoctors] = useState([]);

  async function getDoctorsDetails() {

    let {data} = await axios.get('url');
    setDoctors(data.results);
  }

  getDoctorsDetails();
  
  var doctors = [
    [doc1, "Naidan Smith", "PEDIATRIC CLINIC" , 0],
    [doc2, "Danial Frankie", "DOCTOR" , 1],
    [doc3, "Alexa Jhon", "DOCTOR" , 2],
    [doc4, "Rihana Roy", "GYNECOLOGY" , 3],
    [doc5, "Jason Roy", "NEUROLOGY" , 4],
    [doc6, "Nadim Kama", "CARDIOLOGY" , 5]
  ];

  return (
    <div>
    <MainBg page = "doctors" str = "Doctors"></MainBg>
      <div className="container doctors my-5">
        <h3 className='text-center my-3'><span className='m-auto fs-3'>OUR TEAM</span></h3>
        <h5 className='text-center my-5 fs-2'>Meet the perfect team</h5>
        <div className="row">
      {
        doctors.map((doctor , i) => 
        <div className="col-md-4 my-5">
            <Link aria-current="page" to={`/doctorBook/${i}`}>
              <div className='oneDoctor'>
                <img className='w-100 border rounded-3' src={doctor[0]} alt="" />
                <div className="w-75 m-auto text-center doctorsPos">
                  <h3>{doctor[1]}</h3>
                  <h5>{doctor[2]}</h5>
                </div>
              </div>
            </Link>
          </div>
        )
      }
      </div>
      </div>
    </div>
          
        
  )
}
