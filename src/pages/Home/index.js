import React from 'react'
import './index.css'
import Navigation from '../../assets/icon/navigation.svg'
import MobileData from '../../assets/icon/mobiledata.svg'
function index() {
  return (
    <>
      <div className='container-jumbotron'>
        <div className="body-jumbotron">
          <p className='title-jumbotron'>Best tour booking in</p>
          <p className='location-jumbotron'>Indonesia</p>
        </div>
        <div className="container-search">
          <img src={Navigation} alt="" srcset="" width={60} height={60}/>
          <input type="text" className='input-search' placeholder='search for the experience' />
          <button className='button-search'>Search <span className="lnr lnr-arrow-right"></span></button>
        </div>
      </div>
      <div className="container-benefit">
        <p className="title-benefit">Lorem, ipsum</p>
        <p className="description-benefit">Lorem ipsum dolor sit.</p>
        <div className="body-benefit">
          <img src={MobileData} alt="" srcset="" width={60} height={60}/>
          <p className="contentgit-benefit">Lorem, ipsum.</p>
          <p className="detail-benefit">Lorem, ipsum.</p>
        </div>
      </div>
    </>
  )
}

export default index