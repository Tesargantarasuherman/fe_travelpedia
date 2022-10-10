import React from 'react'
import './index.css'
import Navigation from '../../assets/icon/navigation.svg'
import MobileData from '../../assets/icon/mobiledata.svg'
import Slider from 'react-slick'
import ReactStars from "react-rating-stars-component";

function index() {
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
  };
  const settings = {
    dots: true,
    arrows: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className=" icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Luxury Holiday</p>
              <span className=" icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className="icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className="icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className="icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className="icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className="icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className="icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
          <div className='body-slider'>
            <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
            <div className='content-slider'>
              <p className='title-content-slider'>Lorem, ipsum.</p>
              <span className="icon-content-slider lnr lnr-arrow-right"></span>
            </div>
          </div>
        </Slider>
      </div>
      <div className="container-top-destination">
        <p className="title-top-destination">Lorem, ipsum dolor.</p>
        <p className="description-top-destination">Lorem, ipsum.</p>
        <div className="body-top-destination">
          <div className="container-content-top-destination">
            <img src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80" alt="" srcset="" className='img-content-top-destination' />
            <div className="body-content-top-destination">
              <p className="title-content-top-destination">Lorem, ipsum.</p>
              <p className="description-content-top-destination">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="container-content-top-destination">
            <img src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80" alt="" srcset="" className='img-content-top-destination' />
            <div className="body-content-top-destination">
              <p className="title-content-top-destination">Lorem, ipsum.</p>
              <p className="description-content-top-destination">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="container-content-top-destination">
            <img src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80" alt="" srcset="" className='img-content-top-destination' />
            <div className="body-content-top-destination">
              <p className="title-content-top-destination">Lorem, ipsum.</p>
              <p className="description-content-top-destination">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="container-link-top-destination">
          <div className="body-link-top-destination">
            <p className="link-top-destination">Lorem, ipsum dolor.</p>
            <span className="icon-content-slider lnr lnr-arrow-right"></span>
          </div>
        </div>
      </div>
      <div className="container-featured-tours">
        <p className="title-top-destination">Lorem, ipsum dolor.</p>
        <p className="description-top-destination">Lorem, ipsum.</p>
        <div className="container-content-featured-tours">
          <div className="container-card-tours">
            <div className="body-card-tours">
              <Slider {...settings}>
                <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" className='img-card-tour' />
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" className='img-card-tour' />
                <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" className='img-card-tour' />
              </Slider>
              <div className="content-top-card">
                <button className='button-top-card'>lorem</button>
                <span className="lnr lnr-heart" style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}></span>
              </div>
              <div className="content-bottom-card">
                <span className="lnr lnr-map-marker text-content-bottom-card"></span>
                <p>Bandung</p>
              </div>
            </div>
            <div className="content-card-tours">
              <div className="review-content-card-tours">
                <ReactStars
                  count={5}
                  onChange={null}
                  size={24}
                  value={4}
                  activeColor="#FF4248"
                />
                <p className='text-review-content-card-tours'>24 Reviews</p>
              </div>
            </div>
            <p className="title-card-tours">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="description-card-tours">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem, ipsum.</p>
            </div>
            <div className="description-card-tours">
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
            </div>
            <div className="description-card-tours">
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index