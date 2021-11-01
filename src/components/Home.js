import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CarouselItem from "./CarouselItem";
import mobileData from "../mobile-data";
import BestSeller from "./BestSeller";
import CountdownTime from "./CountdownTime";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import SwiperShow from "./SwiperShow";
const Home = () => {
  const handleDragStart = e => e.preventDefault();
  const responsiveOption = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };
  const items = mobileData.map(item => (
    <CarouselItem
      src={item.img}
      title={item.title}
      price={item.price}
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <SwiperShow />
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-aos="fade-up"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item  carousel-animation active">
            <img
              src="/img/phone-1.jpg"
              className="d-block w-100 img"
              alt="..."
            />
            <div className="carousel-caption  d-none d-md-block">
              <h5>Samsung Galaxy 11</h5>
              <p className="carousel-descript">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item carousel-animation">
            <img
              src="/img/phone-2.jpg"
              className="d-block w-100 img "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ipad Tablet</h5>
              <p className="carousel-descript">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item carousel-animation">
            <img
              src="/img/phone-3.jpg"
              className="d-block w-100 img"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Iphone Ocean 5</h5>
              <p className="carousel-descript">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div className="d-flex flex-wrap flex-row mt-6 py-2 px-4 w-70 justify-content-center mx-auto box-container">
        <div data-aos="fade-up" className="box  position-relative">
          <img src="/img/product-1.jpg" alt="Phone" className="rounded"></img>
          <h3 className=" box-text">IPhone</h3>
        </div>
        <div data-aos="fade-up" className="box  position-relative">
          <img src="/img/phone-pk.jpg" className="rounded" alt="Phone"></img>
          <h3 className=" box-text">Accessories</h3>
        </div>
        <div data-aos="fade-up" className="box position-relative">
          <img src="/img/phone-table.jpg" className="rounded" alt="Phone"></img>
          <h3 className="box-text">Tablet</h3>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-5">
        <h1 className="text-center ">
          <span className="text-primary">T</span>op Device
        </h1>
        <div className="arrival-text mx-auto mb-5 "></div>
        <div className="px-3 py-2">
          <AliceCarousel
            className="py-5"
            mouseTracking
            disableButtonsControls
            animationDuration={800}
            infinite={true}
            items={items}
            keyboardNavigation={true}
            autoPlayInterval={1000}
            autoPlay={true}
            responsive={responsiveOption}
          />
        </div>
      </div>

      <CountdownTime />
      <BestSeller data-aos="fade-up" />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
