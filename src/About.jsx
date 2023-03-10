import React, { useState } from 'react'
import homeDoc1 from './imgs/homDoc1.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css'
import MainBg from './MainBg'
import homeDoc3 from './imgs/homDoc3.jpg'
import homeDoc4 from './imgs/homDoc4.jpg'
import homeDoc4Bg from './imgs/homDoc4Bg.jpg'
import { axios } from 'axios';
export default function About() {
  // const [about , setAbout] = useState('');

  // async function getAboutDetails() {

  //   let {data} = await axios.get('url');
  //   setAbout(data.results);
  // }

  // getAboutDetails();



  const myHomeDoc4Bg={
    backgroundImage: `url(" ${ homeDoc4Bg }  ")`,
    backgroundWidth: '50vh',
    backgroundHeight: '50vh',
    backgroundRepeat: 'no-repeat',
};
  return (
    <>
      <MainBg page = "about" str= "About"></MainBg>

      <div className="container-fluid my-5 px-3 homeHead">
        <div className="row p-5">
          <h2 className='text-center mb-5'><span className=' border-bottom border-3 border-dark fs-1 fw-bold'>How It Spreads?</span></h2>
          <p className='fs-5'>Mpox spreads in a few ways</p>
          <p className='fs-2 fw-bold'>Close or Intimate Contact</p>
          <p className='fs-5'>Mpox can spread to anyone through close, personal, often skin-to-skin contact, including:</p>
          <div className="d-flex">
            <div>
              <i className="fa-solid fa-check text-primary mt-1 me-2 fs-2"></i>
            </div>
            <p className='fs-4'>Direct contact with mpox rash and scabs from a person with mpox, as well as contact with their saliva, upper respiratory secretions
            (snot, mucus), and areas around the anus, rectum, or vagina</p>
          </div>
          <p className='fs-4'>This direct contact can happen during intimate contact, including:</p>

          <div className="d-flex">
            <i className="fa-solid fa-check text-primary mt-1 me-2 fs-2"></i>
            <p className='fs-4'>Oral, anal, or vaginal sex, or touching the genitals (penis, testicles, labia, and vagina) or anus of a person with mpox</p>
          </div>

          <div className="d-flex">
            <i className="fa-solid fa-check text-primary mt-1 me-2 fs-2"></i>
            <p className='fs-4'>Hugging, massage, and kissing</p>
          </div>

          <div className="d-flex">
            <i className="fa-solid fa-check text-primary mt-1 me-2 fs-2"></i>
            <p className='fs-4'>Prolonged face-to-face contact</p>
          </div>

          <p className='fs-4'>The risk is considered low for getting mpox by touching objects, fabrics, and surfaces that have been used by someone with mpox
          and not disinfected, such as clothing, bedding, towels, fetish gear, or sex toys</p>
        </div>
      </div>

      <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6 border border-dark">
          <div className=''>
            <img className='w-100' src={homeDoc3} alt="" />
          </div>
        </div>
        <div className="col-md-6 border border-dark">
          <div className=''>
            <h3 className='mb-3 fs-2 fw-Bold'>Potential Complications From Having
            Monkeypox</h3>
            <p className=' fs-4 fw-semibold fw-semibold'>Possible complications of monkeypox include:</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary text-primary"></i>Bronchopneumonia</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>Sepsis</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>Inflammation Of Brain Tissue, Also Known As Encephalitis</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>Infection Of The Cornea, The Clear Outer Layer Of Your Eye</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>Secondary Infections</p>
            <p className=' fs-4 fw-semibold'>An infection in the cornea may lead to vision loss</p>
            <p className=' fs-4 fw-semibold'>In severe cases, the lesions might merge together. This may
cause the loss of a large area of skin.</p>
          </div>
        </div>
      </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
        <div className="col-md-6">
            <div className='mx-3'>
              <h3 className='mb-3 fs-2 fw-Bold'>How Is Monkeypox Treated?</h3>
              <p className=' fs-4 fw-semibold fw-semibold'>There’s currently no treatment for mpox. However,
              monkeypox is self-limiting, which means it can get better
              without treatment</p>
              <p className=' fs-4 fw-semibold fw-semibold'>Some medications can be used to control an outbreak and
              prevent the disease from spreading. They can include:</p>
              <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check p-3 rounded-circle bg-light me-2 text-primary"></i>Vaccinia Vaccine (Smallpox Vaccine)</p>
              <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check p-3 rounded-circle bg-light me-2 text-primary"></i>Vaccinia Immune Globulin</p>
              <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check p-3 rounded-circle bg-light me-2 text-primary"></i>antiviral medication (in animals)</p>
              <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check p-3 rounded-circle bg-light me-2 text-primary"></i>tecovirimat (TPOXX), an antiviral used to treat</p>
              <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check p-3 rounded-circle bg-light me-2 text-primary"></i>brincidofovir (Tembexa), an antiviral used to treat adult and
              pediatric smallpox</p>
              <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary p-3 rounded-circle bg-light"></i>cidofovir, which is typically used to treat eye infections
              caused by cytomegalovirus but has been used in certain
              mpox cases</p>
              <p className=' fs-4 fw-semibold'>Other treatments focusTrusted Source on managing
              symptoms using over-the-counter or prescription medications, such as pain relievers, topical creams, and oral antihistamines.</p>
            </div>
        </div>
        <div className="col-md-6 d-flex align-items-center" style={myHomeDoc4Bg}>
          <div className=' ms-auto border border-secondary halfwidthForm'>
          <img src={homeDoc4} alt="" className='w-100 border border-dark '/>
          </div>
        </div>
        </div>
      </div>

      <div className="container-fluid my-5 homeSec2">
        <div className="row mb-5">
              <div className="col-md-4 ">
                <div className="pos1">
                  <img className='border border-dark w-100' src={homeDoc1} alt="" />
                </div>
            </div>
            <div className="col-md-8 my-5 pe-5">
          <h3 className='fs-1'>Monkeypox sympt: </h3>
          <p className='fs-4 pe-5'>The symptoms of mpox are similar to those of smallpox. Mpox symptoms are
typically milder.</p>

          <p className='fs-4'>After you contract the mpox virus, it typically takes 6 to 13 daysTrusted Source
for symptoms to appear. However, this can range from 5 to 21 days.</p>


          <p className='fs-4'>The early symptoms can include:</p>

          <p className='fs-4'>fever, which is commonly the first symptom</p>

          <p className='fs-4 py-2'><span className='bg-white border border-primary rounded-circle py-2 px-3 me-2'>1</span>Headache</p>
          <p className='fs-4 py-2'><span className='bg-white border border-primary rounded-circle py-2 px-3 me-2'>2</span>Muscle Aches</p>
          <p className='fs-4 py-2'><span className='bg-white border border-primary rounded-circle py-2 px-3 me-2'>3</span>Back Ache</p>
          <p className='fs-4 py-2'><span className='bg-white border border-primary rounded-circle py-2 px-3 me-2'>4</span>Fatigue</p>
          <p className='fs-4 py-2'><span className='bg-white border border-primary rounded-circle py-2 px-3 me-2'>5</span>chills</p>
          <p className='fs-4 py-2'><span className='bg-white border border-primary rounded-circle py-2 px-3 me-2'>6</span>swollen lymph nodes, also known as lymphadenopathy</p>
        </div>
        </div>
      </div>

    </>
  )
}
