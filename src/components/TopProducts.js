import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Autoplay]);




const TopProducts = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch('http://localhost:5000/categories')
    //   .then((response) => response.json())
    //   .then((data) => setCategories(data.map((category) => category.name)));

    // fetch('http://localhost:5000/products')
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    async function fetchData() {
      const response = await fetch('db.json');
      const data = await response.json();
      console.log(data)
      setProducts(data.products);
    }
    fetchData();
  }, []);

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
              <div className="bg-white rounded-lg shadow-md overflow-hidden" onClick={()=> navigate(`/product/${product.id}`)}>
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
