import React from 'react'
import mainBgImg from './imgs/mainBg1.jpg'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function MainBg(props) {
    // let [page , setPage] = useState("home");
    // let [str , setString] = useState("str");
    let page = "home";
    let str = props.str;
    
    const myStyle={
        backgroundImage: `url(" ${ mainBgImg }  ")`,
        
        height:'60vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
<>
    <section className='d-flex align-items-center border border-secondary mainBg' style={myStyle}>
        
        <div className='ms-5'>
            <h2 className='fs-1 fw-bold'>MonkeyPox</h2>
            
            {(page === props.page) ? <Link to={'/'+page}><p className='text-primary fs-4 fw-bold'><i className="fa-solid fa-house me-1"></i><span >{str}</span></p></Link>
             : 
             <p className='fs-4 fw-bold '><Link to={'/'+page}><i className="fa-solid fa-house me-1 text-secondary"></i><span className='capitalLetter text-secondary'>{page}</span></Link> <span><i className="fa-solid fa-angle-right"></i><span className='text-primary'> {str}</span></span></p>}
            
        </div>
    </section>
</>
  )
}