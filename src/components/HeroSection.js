import React from "react";
import heroImg from "../assets/img/hero-img.png"; 

const HeroSection = () => {
  return (
    <section id="hero" className="hero section light-background">
      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              Enjoy Your Healthy
              <br />
              Delicious Food
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Discover a variety of healthy and delicious options to satisfy
              your cravings.
            </p>
            <div class="input-group">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                type="button"
                class="btn btn-outline-primary"
                data-mdb-ripple-init
              >
                search
              </button>
            </div>
            <a
              href="#"
              className="btn-get-started"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Explore More
            </a>
          </div>
          <div className="col-lg-5 hero-img" data-aos="zoom-out">
            <img
              src={heroImg}
              className="img-fluid animated"
              alt="Delicious Food"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
