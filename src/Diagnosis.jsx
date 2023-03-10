import React from 'react';
import MainBg from './MainBg';
import diaImg from './imgs/diaImg.jpg';
import { useState } from 'react';
import axios from 'axios';
export default function Diagnosis() {
  

  const [image , setImage] = useState('');
  function handleImage(e) {
    console.log(e.target.files);
    setImage(image);
  }

  function handleApi(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image' , image);
    axios.post('url' , formData).then(res => {
      console.log(res);
    })
  }
  return (
    <>
      <MainBg  page = "diagnosis" str = "Diagnosis"></MainBg>
      <div className="container my-5 bg-light py-5 border">
        
        <form onSubmit={handleApi}>
        <div className="row">
          <h3 className='fs-1 fw-bold px-5'>send The Patient Radiography(optional)</h3>
          <div className="col-md-6">
            <div className='p-5'>
              <div>
                <div id="fileInput">
                  <label htmlFor="FileID" className='d-block'><img className='w-100 border' src={diaImg} alt=""/></label>
                  <div className='d-flex justify-content-around bg-white py-5 border'>
                  {/* <i className="fa-solid fa-folder-plus"></i> */}
                    {/* <label for="FileID" className='diaIcon'><i className="fa-solid fa-camera fs-2 pinkHover"></i></label> */}
                    <label htmlFor='FileID' className='diaIcon'><i className="fa-solid fa-folder-plus fs-2 pinkHover"></i></label>
                  </div>
                  <input type="file" name='FileID' hidden id="FileID" onChange={handleImage}/>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-6">
            <div className='bg-white p-5 my-5 border'>
              <h3 className='pb-3  fs-1 fw-bold'>Radiography</h3>
              <p className='py-3 fs-5 fw-semibold'>send the frontal PA chest radiography to support
              the diagnosis</p>
              <p className='py-3 fs-5 fw-semibold'>sending the radiography is optional.</p>
            </div>
          </div>
          <div className='text-center mb-3'>
              <button type='submit' className='btn applayDocHead px-5 py-3'><span className='fw-bold'>DAIGNOUSIS</span></button>
            </div>
        </div>
        </form>
      </div>

    </>
  )
}
