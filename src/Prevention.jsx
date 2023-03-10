import React from 'react'
import MainBg from './MainBg';
import prevention1 from './imgs/prevention1.jpg';
import prevention2 from './imgs/prevention2.jpg';
import prevention3 from './imgs/prevention3.jpg';
import prevention4 from './imgs/prevention4.jpg';
export default function Prevention() {
  return (
    <div>
      <MainBg page = "prevention" str = "Prevention"></MainBg>
      <div className="container py-5 prevention">
        <h3 className=' fs-1 fw-bold'>How to Protect Yourself</h3>
        <p className='text-secondary my-5 fs-5'>Updated October 31, 2022 Español | Print</p>
        <h4 className=' fs-2 fw-bold'>Mpox Prevention Steps</h4>
        <p className='text-secondary my-4 fs-5'>These five steps can help you protect yourself from</p>
        <div className="row">
          <div className="col-md-1">
            <div>
              <h5 className='text-center mb-4'>STEP 1</h5>
            </div>
          </div>
          <div className="col-md-11">
            <h4 className='fs-2 fw-bold'>Avoid close, skin-to-skin contact with people who have a rash that looks like mpox.</h4>
            <div className="row">
              {/* <div className="col-md-9"> */}
                <p className='fs-4 my-2'>This might include skin with what appears to be a rash, pimples, blisters, or scabs.</p>
                  <p className='fs-4 my-2'>1- The rash might appear on the genitals (penis, testicles, labia
                  , vagina) or anus and could be on other areas like the hands, feet,
                  chest, face, or mouth. Do not touch the rash or scabs of a person
                  with mpox</p>
              {/* </di/v> */}
              {/* <div className="col-md-3 "> */}
                {/* <img className='w-100 border rounded-3' src={prevention1} alt="" /> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="w-75 m-auto">
          <hr className='my-5'/>
        </div>

        <div className="row">
          <div className="col-md-1">
            <div>
              <h5 className='text-center mb-4'>STEP 2</h5>
            </div>
          </div>
          <div className="col-md-11">
            <h4 className='fs-2 fw-bold mb-5'>Avoid contact with objects and materials that a person with mpox.</h4>
            <div className="row">
              <div className="col-md-12">
                <p className='fs-4'>1- Do not share eating utensils or cups with a person with.</p>
                <p className='fs-4'>2- Do not handle or touch the bedding, towels, or clothing of a person with mpox</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-75 m-auto">
          <hr className='my-5'/>
        </div>

        <div className="row">
          <div className="col-md-1">
            <div>
              <h5 className='text-center mb-4'>STEP 3</h5>
            </div>
          </div>
          <div className="col-md-11">
            <h4 className='fs-2 fw-bold mb-5'>Wash your hands often.</h4>
            <div className="row">
              {/* <div className="col-md-9"> */}
                <p className='fs-4'>1- Wash your hands often with soap and water, or use
                    an alcohol-based hand sanitizer, especially before eating or
                    touching your face and after you use the bathroom.</p>
                  <p className='fs-4'>2- Handwashing is one of the best ways to protect you,
                  your family, and your friends from getting sick.</p>
              {/* </div> */}
              {/* <div className="col-md-3 "> */}
                {/* <img className='w-100 border rounded-3' src={prevention2} alt="" /> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="w-75 m-auto">
          <hr className='my-5'/>
        </div>

        <div className="row">
          <div className="col-md-1">
            <div>
              <h5 className='text-center mb-4'>STEP 4</h5>
            </div>
          </div>
          <div className="col-md-11">
            <h4 className='fs-2 fw-bold mb-5'>Get vaccinated!</h4>
            <div className="row">
              {/* <div className="col-md-9"> */}
                <p className='fs-4'>1- The JYNNEOS vaccine is approved for prevention of smallpox
                  and mpox. It is the primary vaccine being used in the U.S. during
                  this outbreak</p>
                  <p className='fs-4'>2- Use the Mpox Vaccine Locator to find nearby healthcare
                  locations in your area that provide mpox vaccinations.</p>
              {/* </div> */}
              {/* <div className="col-md-3"> */}
                {/* <img className='w-100 border rounded-3' src={prevention3} alt="" /> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="w-75 m-auto">
          <hr className='my-5'/>
        </div>

        <div className="row">
          <div className="col-md-1">
            <div>
              <h5 className='text-center mb-4'>STEP 5</h5>
            </div>
          </div>
          <div className="col-md-11">
            <h4 className='fs-2 fw-bold mb-4'>If you are in Central or West Africa, avoid contact with animals that
            can spread mpox virus, usually rodents and primates</h4>
            <div className="row">
              {/* <div className="col-md-9"> */}
                <p className='fs-4'>Also, avoid sick or dead animals, as well as bedding or other
                  materials they may have touched. Learn more about mpox in
                  animals.</p>
              {/* </div> */}
              {/* <div className="col-md-3"> */}
                {/* <img className='w-100 border rounded-3' src={prevention4} alt="" /> */}
              {/* </div> */}
            </div>
            {/* <div className='d-flex'>
              <div>
                
              </div>
              <div className='border rounded-3'>
                <img className='w-100' src={prevention4} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
    </div>
  )
}
