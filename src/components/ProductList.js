import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('db.json');
      const data = await response.json();
      console.log(data)
      setCategories(data.categories);
      setProducts(data.products);
    }
    fetchData();
  }, []);

  const filteredProducts = () => {
    if (selectedCategory === 'all') {
      return products;
    } else {
      return products.filter((product) =>
        product.title.toLowerCase().includes(selectedCategory)
      );
    }
  };


  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Electronic Products
        </h2>
        <div className="overflow-x-scroll sm:overflow-x-auto">
          <div className="flex space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 font-semibold ${selectedCategory === category
                    ? 'bg-cyan-800 text-white'
                    : 'bg-white text-gray-800'
                  } rounded-md`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts().map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden" onClick={()=> navigate(`/product/${product.id}`)}
            >
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

          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;