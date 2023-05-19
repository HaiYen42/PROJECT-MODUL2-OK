import React from "react";
import About from "../about/About";
import Client from "../client/Client";
import Contact from "../contact/Contact";
import Product from "../product/Product";
import banner1 from '../../assets/img/banner/banner1.jpg'
import banner2 from '../../assets/img/banner/banner2.jpg'
import banner3 from '../../assets/img/banner/banner3.jpg'
import banner4 from '../../assets/img/banner/banner4.jpg'
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



export default function Index() {

  return (
    <div>
      
      {/* header section end */}
      {/* banner section start */}
      {/* <Carousel
      interval={2000}
     >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={{ fontWeight: "bolder", fontSize:25}}> Beauty Flower</h2>
          <p> Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 style={{ fontWeight: "bolder", fontSize:25}}> Beauty Flower</h2>
          <p> Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h2 style={{ fontWeight: "bolder", fontSize:25}}> Beauty Flower</h2>
          <p> Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

      <div className="banner_section layout_padding">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Flower
                    </h1>
                    <p className="banner_text">
                    Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <NavLink to={'/product'}>Buy Now</NavLink>
                   
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src={banner1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Flower
                    </h1>
                    <p className="banner_text">
                    Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                    <NavLink to={'/product'}>Buy Now</NavLink>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src={banner2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Flower
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                    <NavLink to={'/product'}>Buy Now</NavLink>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src={banner3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Flower
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                    <NavLink to={'/product'}>Buy Now</NavLink>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src={banner4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner section end */}
      {/* product section start */}
      <Product/>
      {/* product section end */}
      {/* about section start */}
      <About/>
      {/* about section end */}
      {/* customer section start */}
      <Client/>
      {/* customer section end */}
      {/* contact section start */}
      <Contact/>
      {/* contact section end */}
      {/* footer section start */}

    </div>
  );
}
