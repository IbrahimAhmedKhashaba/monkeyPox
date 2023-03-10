import axios from 'axios';
import React, { useState } from 'react';
import MainBg from './MainBg';
// import faqBg from './imgs/footerImg.jpg'
// import newsImg from './imgs/footerImg.jpg'

export default function Faq() {
    const [faqs , setFaqs] = useState([]);

    async function getFaqsDetails() {
  
      let {data} = await axios.get('url');
      setFaqs(data.results);
    }
  
    getFaqsDetails();

  return (
    <div className='faqSection'>
    <MainBg page = "faq" str = "Faq"></MainBg>

    <div className="w-75 m-auto mt-5 py-5">
    <h3 className="w-25 text-center mx-auto p-2 my-3 mx-5 alert alert-primary">Commen Questions</h3>
    <div className="accordion my-5" id="accordionExample">
        <h3 className='text-white'>Asked Questions:</h3>
        <div className="accordion-item my-5 border">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti officia inventore aliquid, magni ea eligendi tempora aliquam dignissimos et.
                </div>
            </div>
        </div>



        <div className="accordion-item my-5 border">
            <h2 className="accordion-header btn-control" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti officia inventore aliquid, magni ea eligendi tempora aliquam dignissimos et.
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header btn-control" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti officia inventore aliquid, magni ea eligendi tempora aliquam dignissimos et.
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header btn-control" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti officia inventore aliquid, magni ea eligendi tempora aliquam dignissimos et.
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header btn-control" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti officia inventore aliquid, magni ea eligendi tempora aliquam dignissimos et.
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header btn-control" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti officia inventore aliquid, magni ea eligendi tempora aliquam dignissimos et.
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header btn-control" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corrupti officia inventore aliquid, magni ea eligendi tempora aliquam dignissimos et.
                </div>
            </div>
        </div>

























        {/* <div className="accordion-item my-5">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What causes monkeypox?
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae, aut esse cumque omnis, veritatis reiciendis, et magni voluptatum quae excepturi. Corrupti, officiis facilis dolorem deleniti deserunt numquam accusantium? Rerum commodi nam nisi molestias laudantium earum corporis consectetur ducimus voluptates, voluptate velit voluptas eaque a voluptatem mollitia alias animi neque.
                </div>
            </div>
        </div>
        <div className="accordion-item my-5">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Is monkeypox deadly?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a quibusdam asperiores quisquam unde assumenda illum magni mollitia qui eveniet dolor atque harum pariatur odio totam nulla, dolorum veritatis. Magnam.
                </div>
            </div>
        </div>

        <div className="accordion-item my-5">
            <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Is monkeypox deadly?
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a quibusdam asperiores quisquam unde assumenda illum magni mollitia qui eveniet dolor atque harum pariatur odio totam nulla, dolorum veritatis. Magnam.
                </div>
            </div>
        </div> */}
        
        
        {/* <div className="accordion-item my-5">
            <h2 className="accordion-header collapsed" id="headingFour">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem?
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem?
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem?
                </div>
            </div>
        </div>


        <div className="accordion-item my-5">
            <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                How long do mpox symptoms last?
                </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero tenetur optio ut deleniti quidem amet illo accusamus eligendi rem?
                </div>
            </div>
        </div> */}
    </div>
    </div>
    
    </div>
  )
}
