import React from 'react';

const PromotionSection = () => {
  const promotions = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      buttonText: 'Shop Now',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Suspendisse fringilla tellus ut dui eleifend vestibulum.',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      buttonText: 'Shop Now',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promotion) => (
            <div key={promotion.id} className="relative">
              <img src={promotion.image} alt={promotion.title} className="w-full h-50 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                <h3 className="text-lg font-semibold text-white">{promotion.title}</h3>
                <p className="text-white mt-2">{promotion.description}</p>
                <button className="mt-5 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                  {promotion.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
