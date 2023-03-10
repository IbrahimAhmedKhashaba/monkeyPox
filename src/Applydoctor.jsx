import React from 'react'
import MainBg from './MainBg'
import applyDocImg from './imgs/applyDocImg.jpg'
export default function Applydoctor() {
  return (
    <>
    <MainBg page = "Applydoctor" str = "Apply as a doctor"></MainBg>
    <div className='text-center my-5'>
      <h2 className='fs-2 fw-bold my-5'>Apply As a Doctor for Online Consultation</h2>
    </div>
    <div className="mx-auto my-5 containerApplayForm">
      <div>
      <i className="fa-solid fa-star text-primary me-2"></i>
      <i className="fa-solid fa-star text-primary me-2"></i>
      <i className="fa-solid fa-star text-primary me-2"></i>
      <i className="fa-solid fa-star text-primary me-2"></i>
      <i className="fa-solid fa-star text-secondary me-2"></i>
      <span>4.1 (4)</span>
      </div>
      

      <div>
        <h5 className='fs-2 text-secondary fw-normal'>Dear doctor</h5>
        <h5 className='fs-2 text-secondary fw-normal'>Thank you for your interest in Mpox Online. We are eager to have you in the team.</h5>
      </div>

      <div className="applayDocHead">
                  <h3 className='fs-1 fw-bold'>Complete the following form</h3>
      </div>

      <div>
        <h3 className='fs-2 text-secondary fw-bold'>Please have the following ready: </h3>
      </div>

      <div className='my-4'>
        <h5 className='fs-3 text-secondary fw-normal'>A personal photo</h5>
        <h5 className='fs-3 text-secondary fw-normal'>A scan/photo of your medical syndicate card.</h5>
      </div>





      <div className='applayDocForm border my-5'>
        <h3 className='fs-3 fw-bold text-secondary m-3'>Fields marked with an <span className='text-danger'>*</span> are required</h3>
          <form className='m-5 mt-1 bg-white p-5' action="">
            
          
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label fs-5 fw-bold text-secondary">NAME AND SURNAME <span className='text-danger'>*</span></label>
              <input type="email" className="form-control pb-5 border-primary rounded-1" id="exampleFormControlInput1" placeholder="(e.g Dr.Danial Frankie)"/>
            </div>
            
            
            <div className='d-flex justify-content-between flex-wrap mb-3'>
              <div className='halfwidthForm mb-3'>
              <label htmlFor="exampleFormControlInput1 " className="form-label fs-5 fw-bold text-secondary applayDocMarginRight">GENDER <span className='text-danger'>*</span></label>
                <select defaultValue={1} className="form-select form-select-lg mb-3 w-100 pb-3 text-primary  border-primary rounded-1 applayDocMarginRight" aria-label=".form-select-lg example">
                  <option className='fs-4 fw-bold' value="DEFAULT" disabled>Select</option>
                  <option className='fs-3 text-center fw-bold' value="1">Male</option>
                  <option className='fs-3 text-center fw-bold' value="2">Female</option>
                </select>
              </div>
              <div className='halfwidthForm mb-3'>
              <label htmlFor="exampleFormControlInput1" className="form-label fs-5 fw-bold text-secondary applayDocMarginLeft">E-mail <span className='text-danger'>*</span></label>
                <input type="email" className="form-control is-invalid pb-4 border-primary rounded-1 applayDocMarginLeft" id="floatingInputInvalid" placeholder="name@example.com" />
              </div>
            </div>

            <div className='d-flex justify-content-between flex-wrap mb-3'>
              
              <div className='halfwidthForm mb-3'>
              <label htmlFor="exampleFormControlInput1" className="form-label fs-5 fw-bold text-secondary applayDocMarginRight">COUNTRY <span className='text-danger'>*</span></label>
                <input type="email" className="form-control pb-4 border-primary rounded-1 applayDocMarginRight" id="floatingInputInvalid" placeholder="(e.g Egypt)" />
              </div>

              <div className='halfwidthForm '>
              <label htmlFor="exampleFormControlInput1 " className="form-label fs-5 fw-bold text-secondary applayDocMarginLeft">Highest Certificate <span className='text-danger'>*</span></label>
                <select defaultValue={1} className="form-select form-select-lg mb-3 w-100 pb-3 text-primary  border-primary rounded-1 applayDocMarginLeft" aria-label=".form-select-lg example">
                  <option className='fs-4 fw-bold' value="DEFAULT" disabled>Select</option>
                  <option className='fs-3 text-center fw-bold' value="1">Medicinae Doctor</option>
                  <option className='fs-3 text-center fw-bold' value="2">Master s</option>
                  <option className='fs-3 text-center fw-bold' value="3">Bechelor of Medicinae</option>
                  <option className='fs-3 text-center fw-bold' value="3">other</option>
                </select>
              </div>
            </div>

            <div className="d-flex my-3">
            
              <div className='halfwidthForm '>
              <label htmlFor="exampleFormControlInput1" className="form-label fs-5 fw-bold text-secondary">GOVERNORATE  <span className='text-danger'>*</span></label>
                <input type="email" className="form-control pb-4 border-primary rounded-1 me-2" id="floatingInputInvalid" placeholder="(e.g Cairo)" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label fs-5 fw-bold text-secondary">Short Biography English For Display On Your Page  <span className='text-danger'>*</span></label>
              <input type="email" className="form-control pb-5 border-primary rounded-1" id="exampleFormControlInput1" placeholder="Short Biography About You"/>
            </div>

            <div className='mb-3'>
            <label htmlFor="exampleFormControlInput1" className="form-label fs-5 fw-bold text-secondary">Kindly Upload a personal image <span className='text-danger'>*</span></label>
              <input className="form-control form-control-lg" id="formFileLg" type="file"/>
            </div>

            <div className='mb-3'>
            <label htmlFor="exampleFormControlInput1" className="form-label fs-5 fw-bold text-secondary">Kindly Upload Your Medical Syndicate Card <span className='text-danger'>*</span></label>
              <input className="form-control form-control-lg" id="formFileLg" type="file"/>
            </div>

            <div className='text-center mb-3'>
              <button type='submit' className='btn applayDocHead px-5 py-3'><span className='fw-bold'>SUBMIT</span></button>
            </div>

          </form>
      </div>
    </div>
    </>
  )
}
