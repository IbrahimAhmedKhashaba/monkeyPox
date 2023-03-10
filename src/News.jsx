import React from 'react'
import MainBg from './MainBg'
import newsImg from './imgs/footerImg.jpg'
import { Link } from 'react-router-dom';
export default function News() {
  
    
  return (
    <>
        <MainBg page = "news" str = "News"></MainBg>
        <div className="w-75 m-auto">
            <h3 className='mt-5 fw-bold mb-3'>News: </h3>
            <div className=''>
                <div className='container'>
                    <Link to='/oneNews'><div className="row mb-5 border rounded-5 p-0">
                        <div className="col-md-3 ">
                            <div>
                                <img className='w-100 border rounded-5 me-auto' src={newsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias magnam? Id tempora placeat iusto non nulla. Dicta, similique esse.</p>
                            </div>
                        </div>
                    </div></Link>
                    <Link to='/oneNews'><div className="row mb-5 border rounded-5 p-0">
                        <div className="col-md-3 ">
                            <div>
                                <img className='w-100 border rounded-5 me-auto' src={newsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias magnam? Id tempora placeat iusto non nulla. Dicta, similique esse.</p>
                            </div>
                        </div>
                    </div></Link>

                    <Link to='/oneNews'><div className="row mb-5 border rounded-5 p-0">
                        <div className="col-md-3 ">
                            <div>
                                <img className='w-100 border rounded-5 me-auto' src={newsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias magnam? Id tempora placeat iusto non nulla. Dicta, similique esse.</p>
                            </div>
                        </div>
                    </div></Link>

                    <Link to='/oneNews'><div className="row mb-5 border rounded-5 p-0">
                        <div className="col-md-3 ">
                            <div>
                                <img className='w-100 border rounded-5 me-auto' src={newsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias magnam? Id tempora placeat iusto non nulla. Dicta, similique esse.</p>
                            </div>
                        </div>
                    </div></Link>

                    <Link to='/oneNews'><div className="row mb-5 border rounded-5 p-0">
                        <div className="col-md-3 ">
                            <div>
                                <img className='w-100 border rounded-5 me-auto' src={newsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias magnam? Id tempora placeat iusto non nulla. Dicta, similique esse.</p>
                            </div>
                        </div>
                    </div></Link>

                    <Link to='/oneNews'><div className="row mb-5 border rounded-5 p-0">
                        <div className="col-md-3 ">
                            <div>
                                <img className='w-100 border rounded-5 me-auto' src={newsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias magnam? Id tempora placeat iusto non nulla. Dicta, similique esse.</p>
                            </div>
                        </div>
                    </div></Link>

                    <Link to='/oneNews'><div className="row mb-5 border rounded-5 p-0">
                        <div className="col-md-3 ">
                            <div>
                                <img className='w-100 border rounded-5 me-auto' src={newsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div >
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias magnam? Id tempora placeat iusto non nulla. Dicta, similique esse.</p>
                            </div>
                        </div>
                    </div></Link>

                </div>
            </div>
        </div>
    </>
  )
}
