import React from 'react';
import TopProducts from './TopProducts';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CallToAction from './CallToAction';
import Recommand from './Recommand';
import Review from './Review';
import PromotionSection from './PromotionSection';

const Hero = () => {
  return (
    <div>
     <section className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={false}
        >
          <div>
            <h1 className="text-4xl font-bold">Welcome to Reven IT Store</h1>
            <p className="text-lg mt-4">
              Find the best electronic products at unbeatable prices!
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Discover Amazing Deals</h1>
            <p className="text-lg mt-4">
              Save big on the hottest tech gadgets and accessories!
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Experience Cutting-Edge Tech</h1>
            <p className="text-lg mt-4">
              Shop now to get the latest and greatest electronics!
            </p>
          </div>
        </Carousel>
      </div>
    </section>

      <TopProducts />
      <section className="bg-gray-100 py-12 px-4">
        <PromotionSection/>
        {/* section 3 */}
      </section>
      <section className="bg-white py-12 px-4">
        <Recommand/>
      </section>
      <section className="bg-gray-100 py-12 px-4">
        <Review/>
      </section>
      <section className="bg-white py-12 px-4">
        <CallToAction/>
      </section>
    </div>
  );
};

export default Hero;
