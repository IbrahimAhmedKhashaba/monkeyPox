import React from 'react'
import MainBg from './MainBg';
import homeDoc1 from './imgs/homDoc1.jpg'
// import homeDoc2 from './imgs/homDoc2.jpg'
import homeDoc3 from './imgs/homDoc3.jpg'
import homeDoc6 from './imgs/homDoc6.jpg'
import homeDoc5 from './imgs/homDoc5.jpg'
import homeDoc5Bg from './imgs/homDoc5Bg.jpg'
// import faqBg from './imgs/faqBg.jpg'
import { useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [home , setHome] = useState('');

  async function getHomeDetails() {

    let {data} = await axios.get('url');
    setHome(data.results);
  }

  getHomeDetails();
  const myHomeDoc4Bg={
    backgroundImage: `url(" ${ homeDoc5Bg }  ")`,
    backgroundWidth: '50vh',
    backgroundHeight: '50vh',
    backgroundRepeat: 'no-repeat',
};


  return (

    <>
<MainBg page = "home" str = "Home"></MainBg>
    <div className="container-fluid my-5 homeSec1 text-white">
      <div className="row mb-5">
        <div className="col-md-8 my-5 pe-5">
          <h3 className='fs-1'>MonkeyPox Related</h3>
          <p className='fs-4 pe-5'>Mpox (monkeypox) is a viral disease similar to smallpox. It
          causes fever, swollen lymph nodes, and a lesion-like rash. The
          lesions can appear on or near your genitals or anus and in other
          areas.</p>

          <p className='fs-4'>Mpox is also a zoonotic disease. This means it can be
          transmitted from animals to humans and vice versa. It can also
          be transmitted from one human to another.</p>


          <p className='fs-4'>There are two different types of the mpox virus, the West
          African virus, and the Congo Basin virus.</p>

          <p className='fs-4'>Before 2022, most cases of mpox occurred in central and
          western Africa. However, cases of mpox caused by the West
          African form of the virus have been reported in 94 countries
          worldwide as of the time of this article’s publication, including
          in areas where it doesn’t usually occur.</p>

          <p className='fs-4'>Read on to learn about the causes, symptoms, and diagnosis of
          mpox. This article will also explain how mpox spreads and how
          it can be treated.</p>
        </div>
        <div className="col-md-4">
          <div className=" pos1">
            <img className='border h-100 w-100' src={homeDoc1} alt="" />
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid p-5 homeSec2">
      <div className="row">

      <div className="col-md-6 mb-5 d-flex align-items-center" style={myHomeDoc4Bg}>
          <div className=' ms-auto mt-auto border border-secondary halfwidthForm'>
          <img src={homeDoc5} alt="" className='w-100 border border-dark '/>
          </div>
        </div>

      {/* <div className="col-md-6 d-flex align-items-center" style={myHomeDoc4Bg}>
          <div className=' ms-auto border border-secondary halfwidthForm'>
          <img src={homeDoc5} alt="" className='w-100 border border-dark '/>
          </div>
        </div> */}
      {/* <div className="col-md-6 d-flex align-items-center mb-5" style={myHomeDoc4Bg}>
          <div className=' ms-auto border border-secondary halfwidthForm'>
            <img src={homeDoc5} alt="" className='w-100 border border-dark'/>
          </div>
        </div> */}
        <div className="col-md-6">
            <div className='mx-3'>
            <h3 className='mb-3 fs-2 fw-Bold'><span className=' border-bottom border-dark'>Potential Complications From Having Monkeypox</span></h3>
              <p className='fs-4 lh-lg mt-5'>Monkeypox is a viral zoonosis (a virus transmitted to humans from animals)
              with symptoms similar to those seen in the past in smallpox patients,
              although it is clinically less severe. With the eradication of smallpox in 1980
              and subsequent cessation of smallpox vaccination, monkeypox has emerged
              as the most important orthopoxvirus for public health. Monkeypox primarily
              occurs in ceimport ntral and west Africa, often in proximity to tropical rainforests, and
              has been increasingly appearing in urban areas. Animal hosts include a range
              of rodents and non-human primates.</p>
              </div>
        </div>
        
      </div>
    </div>





      {/* <div className="container-fluid mb-5 homeSec2">
        <div className="row mb-5">
              <div className="col-md-4 ">
                <div className="pos1">
                  <img className=' w-100' src={homeDoc2} alt="" />
                </div>
            </div>
            <div className="col-md-8 my-5 pe-5">
          <h3 className='fs-1'>MonkeyPox Related</h3>
          <p className='fs-4 pe-5'>Mpox (monkeypox) is a viral disease similar to smallpox. It
          causes fever, swollen lymph nodes, and a lesion-like rash. The
          lesions can appear on or near your genitals or anus and in other
          areas.</p>

          <p className='fs-4'>Mpox is also a zoonotic disease. This means it can be
          transmitted from animals to humans and vice versa. It can also
          be transmitted from one human to another.</p>


          <p className='fs-4'>There are two different types of the mpox virus, the West
          African virus, and the Congo Basin virus.</p>

          <p className='fs-4'>Before 2022, most cases of mpox occurred in central and
          western Africa. However, cases of mpox caused by the West
          African form of the virus have been reported in 94 countries
          worldwide as of the time of this article’s publication, including
          in areas where it doesn’t usually occur.</p>

          <p className='fs-4'>Read on to learn about the causes, symptoms, and diagnosis of
          mpox. This article will also explain how mpox spreads and how
          it can be treated.</p>
        </div>
        </div>
      </div> */}




    <div className="container-fluid my-5">
      <div className="row">

      <div className="col-md-6 border border-secondary homeEndSec">
          <div className='text-white my-5'>
            <h3 className='mb-3 fs-2 fw-Bold'><span className=' border-bottom border-white'>Potential Complications From Having Monkeypox</span></h3>
            <p className='fs-4 lh-lg mt-5'>Various animal species have been identified as susceptible to
            monkeypox virus. This includes rope squirrels, tree squirrels,
            Gambian pouched rats, dormice, non-human primates and
            other species. Uncertainty remains on the natural history of
            monkeypox virus and further studies are needed to identify the
            exact reservoir(s) and how virus circulation is maintained in
            nature.</p>
          </div> 
        </div>
        <div className="col-md-6 border border-secondary">
          <div className=''>
            <img className='w-100' src={homeDoc6} alt="" />
          </div>
        </div>
        {/* <div className="col-md-6 border border-secondary">
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
        </div> */}
      </div>
    </div>

    


    {/* <div className="container-fluid">
      <div className="row">
      <div className="col-md-6">
          <div className='mx-3'>
            <h3 className='mb-3 fs-2 fw-Bold'>How Is Monkeypox Treated?</h3>
            <p className=' fs-4 fw-semibold fw-semibold'>There’s currently no treatment for mpox. However,
            monkeypox is self-limiting, which means it can get better
            without treatment</p>
            <p className=' fs-4 fw-semibold fw-semibold'>Some medications can be used to control an outbreak and
            prevent the disease from spreading. They can include:</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary text-primary"></i>Vaccinia Vaccine (Smallpox Vaccine)</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>Vaccinia Immune Globulin</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>antiviral medication (in animals)</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>tecovirimat (TPOXX), an antiviral used to treat</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>brincidofovir (Tembexa), an antiviral used to treat adult and
            pediatric smallpox</p>
            <p className=' fs-4 fw-semibold'><i className="fa-solid fa-check me-2 text-primary"></i>cidofovir, which is typically used to treat eye infections
            caused by cytomegalovirus but has been used in certain
            mpox cases</p>
            <p className=' fs-4 fw-semibold'>Other treatments focusTrusted Source on managing
            symptoms using over-the-counter or prescription medications, such as pain relievers, topical creams, and oral antihistamines.</p>
          </div>
      </div>
      <div className="col-md-6 d-flex align-items-center " style={myHomeDoc4Bg}>
        <div className='w-50 ms-auto border border-secondary'>
        <img src={homeDoc4} alt="" className='w-100 '/>
        </div>
      </div>
      </div>
    </div>






    <div className="container-fluid mb-5 homeSec2">
        <div className="row mb-5">
              <div className="col-md-4 ">
                <div className="pos1">
                  <img className=' w-100' src={homeDoc1} alt="" />
                </div>
            </div>
            <div className="col-md-8 my-5 pe-5">
          <h3 className='fs-1'>MonkeyPox Related</h3>
          <p className='fs-4 pe-5'>Mpox (monkeypox) is a viral disease similar to smallpox. It
          causes fever, swollen lymph nodes, and a lesion-like rash. The
          lesions can appear on or near your genitals or anus and in other
          areas.</p>

          <p className='fs-4'>Mpox is also a zoonotic disease. This means it can be
          transmitted from animals to humans and vice versa. It can also
          be transmitted from one human to another.</p>


          <p className='fs-4'>There are two different types of the mpox virus, the West
          African virus, and the Congo Basin virus.</p>

          <p className='fs-4'>Before 2022, most cases of mpox occurred in central and
          western Africa. However, cases of mpox caused by the West
          African form of the virus have been reported in 94 countries
          worldwide as of the time of this article’s publication, including
          in areas where it doesn’t usually occur.</p>

          <p className='fs-4'>Read on to learn about the causes, symptoms, and diagnosis of
          mpox. This article will also explain how mpox spreads and how
          it can be treated.</p>
        </div>
        </div>
      </div> */}





    
    </>
  )
}
