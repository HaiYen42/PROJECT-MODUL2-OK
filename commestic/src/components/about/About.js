import React from "react";
import banner4 from '../../../src/assets/img/banner/banner4.jpg'

export default function About() {
  return (
    <>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="about_section_main">
            <div className="row">
              <div className="col-md-6">
                <div className="about_taital_main">
                  <h1 className="about_taital">About Our beauty sotore</h1>
                  <p className="about_text">
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequatlabore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequatlabore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <div className="readmore_bt">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img src={banner4} className="image_3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
