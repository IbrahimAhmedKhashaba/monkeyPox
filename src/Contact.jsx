import React from "react"
import MainBg from "./MainBg"
import axios, { Axios } from "axios"
import { useState } from "react"
export default function Contact() {
  
  const [error , setError] = useState();
  const [user , setUser] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });





  function getUserData(e){
    let myUser = {...user};
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(user);
  }

  async function submitContactForm(e) {
    e.preventDefault();
    let {data} = await Axios.post('url' , user);
    if(data.message === "success") {

    } else {
      setError(data.message);
    }
  }
  return (
    <>
    <MainBg page = "contact" str = "Contact"></MainBg>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 mb-2 h-100">
          <div className="text-center bg-light border border-secondary contactIcons p-2">
              <div className="Icon bg-primary w-25 text-center border rounded-5 m-auto text-white mt-5">
              <i className="fa-solid fa-location-dot fs-1 my-4 pinkHover"></i>
              </div>
              <h3 className="text-center">Our Location</h3>
              <p className="my-4">
              The Queen's Walk, Bishop's, London
              SE1 7PB, United Kingdom.
              </p>
          </div>
        </div>
        <div className="col-md-4 mb-2 h-100">
          <div className=" text-center bg-light border border-secondary contactIcons">
              <div className="Icon bg-primary w-25 text-center border rounded-5 m-auto text-white mt-5">
              <i className="fa-solid fa-phone fs-1 my-4 pinkHover"></i>
              </div>
              <h3>Our Contact</h3>
              <div className="my-4">
                <p>+ (567) 1234-567-8900</p>
                <p>+ (567) 1234-567-8901</p>
              </div>
          </div>
        </div>
        <div className="col-md-4 mb-2 h-100">
          <div className="text-center bg-light border border-secondary contactIcons">
              <div className="Icon bg-primary w-25 text-center border rounded-5 m-auto text-white mt-5">
              <i className="fa-solid fa-envelope fs-1 my-4 pinkHover"></i>
              </div>
              <h3>Mail Us</h3>
              <p className="my-4">info@peacefulthemes.com</p>
              <p className="my-4">info2@peacefulthemes.com</p>
              
              
          </div>
        </div>
      </div>
    </div>
        <form className="border border-secondary m-auto mb-5 py-3 w-75 formRegisterContainer" onSubmit={submitContactForm}>
              <h3 className="mx-auto p-3 my-3 text-center "><span className="alert alert-primary">Contact us</span></h3>
              {/* {error? <div className="alert alert-danger">{error}</div> : ''} */}
                <div className="w-75 mx-auto my-4">
                  <label htmlFor="name">Enter your name: </label>
                  <input type="text" onChange={getUserData} className='form-control ' id='name' name='name' placeholder="John Dee"/>
                </div>

                <div className="w-75 mx-auto my-4">
                  <label htmlFor="email">Enter your email: </label>
                  <input  type="email"  onChange={getUserData}  className='form-control ' id='email' name='email' placeholder="username@mail.com"/>
                </div>

                <div className="w-75 mx-auto my-4">
                  <label htmlFor="phone">Enter your phone: </label>
                  <input type="text" onChange={getUserData} className='form-control ' id='phone' name='phone' placeholder="+987241567384582"/>
                </div>

                <div className="w-75 mx-auto my-4">
                  <label htmlFor="message">Write Message: </label>
                  <textarea  type="text"  onChange={getUserData} className='form-control ' id='messsage' name='message' placeholder="Type something…"/>
                </div>
                  

                  
                <div className="w-75 mx-auto text-center mb-2">
                  <button type='submit' className='btn btn-outline-primary'>Check yourself</button>
                </div>
                  
                
                  
                  
                </form>
    

    </>
    
  )
}


