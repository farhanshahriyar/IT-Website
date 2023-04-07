// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// // import 'swiper/css/bundle';

// SwiperCore.use([Navigation, Pagination, Autoplay]);

// import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'react-id-swiper';
// import 'swiper/swiper.min.css';

// // import 'swiper/swiper.min.css';
// import 'swiper/swiper-bundle.min.css';

// // SwiperCore.use([Navigation, Pagination, Autoplay]);

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Autoplay]);




const TopProducts = () => {
  const products = [
    {
      id: 1,
      title: 'Smartphone',
      image: 'https://via.placeholder.com/200',
      price: '$599.99',
    },
    {
      id: 2,
      title: 'Laptop',
      image: 'https://via.placeholder.com/200',
      price: '$999.99',
    },
    {
      id: 3,
      title: 'Smart TV',
      image: 'https://via.placeholder.com/200',
      price: '$799.99',
    },
    {
      id: 4,
      title: 'Headphones',
      image: 'https://via.placeholder.com/200',
      price: '$199.99',
    },
    {
      id: 5,
      title: 'Graphics Card',
      image: 'https://via.placeholder.com/200',
      price: '$599.99',
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Top Electronic Products
        </h2>
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        > */}

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
          rebuildOnUpdate
        >

          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopProducts;
