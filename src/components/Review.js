import React from 'react';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      date: '2023-04-01',
      text: 'This product is amazing! I highly recommend it.',
      profileImage: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: '2023-03-25',
      text: 'Great quality and fast shipping. Very satisfied with my purchase.',
      profileImage: 'https://via.placeholder.com/50',
    },
    {
        id: 2,
        name: 'Jane Smith',
        date: '2023-03-25',
        text: 'Great quality and fast shipping. Very satisfied with my purchase.',
        profileImage: 'https://via.placeholder.com/50',
      },
    // ... more reviews
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.profileImage}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
