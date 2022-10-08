import React from 'react'
import './index.css'
import Navigation from '../../assets/icon/navigation.svg'
import MobileData from '../../assets/icon/mobiledata.svg'
import Next from '../../assets/icon/next.svg'
import Slider from 'react-slick'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <img src={Navigation} alt="arrow_left"/>
    </div>
  );
}
function index() {
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // nextArrow: 
    // <div style={{backroundColor:'white',padding:20}}>
    //   <img src={Next} alt="arrow_left"/> 
    // </div>   ,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    
    <>
      <div className='container-jumbotron'>
        <div className="body-jumbotron">
          <p className='title-jumbotron'>Best tour booking in</p>
          <p className='location-jumbotron'>Indonesia</p>
        </div>
        <div className="container-search">
          <img src={Navigation} alt="" srcset="" width={60} height={60} />
          <input type="text" className='input-search' placeholder='search for the experience' />
          <button className='button-search'>Search <span className="lnr lnr-arrow-right"></span></button>
        </div>
      </div>
      <div className="container-benefit">
        <p className="title-benefit">Lorem, ipsum</p>
        <p className="description-benefit">Lorem ipsum dolor sit.</p>
        <div className="content-benefit">
          <div className="body-benefit">
            <img src={MobileData} alt="" srcset="" width={60} height={60} className="icon-benefit" />
            <p className="title-content-benefit">Lorem, ipsum.</p>
            <p className="detail-content-benefit">More Details <span className="lnr lnr-chevron-right" /></p>
          </div>
          <div className="body-benefit">
            <img src={MobileData} alt="" srcset="" width={60} height={60} className="icon-benefit" />
            <p className="title-content-benefit">Lorem, ipsum.</p>
            <p className="detail-content-benefit">More Details <span className="lnr lnr-chevron-right" /></p>
          </div>
          <div className="body-benefit">
            <img src={MobileData} alt="" srcset="" width={60} height={60} className="icon-benefit" />
            <p className="title-content-benefit">Lorem, ipsum.</p>
            <p className="detail-content-benefit">More Details <span className="lnr lnr-chevron-right" /></p>
          </div>
          <div className="body-benefit">
            <img src={MobileData} alt="" srcset="" width={60} height={60} className="icon-benefit" />
            <p className="title-content-benefit">Lorem, ipsum.</p>
            <p className="detail-content-benefit">More Details <span className="lnr lnr-chevron-right" /></p>
          </div>
        </div>
      </div>
      <div className="container-slider">
      <Slider {...setting}>
        <div>
        <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />

          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />

          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />

          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />

          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />

          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />

          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />

          </div>
        </Slider>
      </div>
    </>
  )
}

export default index