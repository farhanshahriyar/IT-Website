import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1606850028922-d90aba1165c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="About Us"
              className="w-full object-cover object-center rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Reven IT Store
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Welcome to Reven IT Store. We are a leading provider of IT solutions and services. We offer a wide range of products and services, including computers, laptops, tablets, smartphones, printers, scanners, networking equipment, software, and more. We also offer a variety of IT services, such as computer repair, virus removal, data recovery, and more.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We are committed to providing our customers with the best possible service and support. We have a team of experienced and knowledgeable technicians who are always available to help you with your IT needs. We also offer a variety of resources, such as tutorials, articles, and videos, to help you learn more about IT.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
            We invite you to visit our website or contact us today to learn more about our products and services. We look forward to working with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
