import React from 'react';
import Layout from 'components/global/layout';
import './styles.scss';
import Link from 'next/link';



export const Home = () => (

  <Layout title="BeeZee Home" description="This is the home page">
    <div className = "home">
    <div className="home-first">
      <h1 className="title">BEEZEE EVENTS</h1>
      <div className="wrapper">
        <div className="slideshows">
          <div className="slideshow slideshow--hero">
            <div className="slides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--before">
            <div className="slides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--after">
            <div className="slides">
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="title2"><h1>Bespoken Elegance, only a button away 🤗</h1>
      <div className="hero-text">
        <h1>Our services include birthdays, romantic picnics and baby showers; whether indoors or outdoors. 
          You can always count on us to make you and your loved ones create an everlasting moment of beauty
           and delight.</h1>
        <p>Its as Easy as Clicking below</p>
        <button><Link href="/bookUsNow">
                <a>Book Us Now</a>
              </Link></button>
    </div>
    </div>
    </div>
  </Layout>

);

export default Home;
