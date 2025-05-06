import React from "react";

const services = [
  { image: "src/assets/service1.png", size: "col-span-2 row-span-1" },
  { image: "src/assets/service2.png", size: "lg:col-span-1 col-span-2 row-span-1" },
  { image: "src/assets/service3.png", size: "lg:col-span-1 col-span-2 row-span-1" },
  { image: "src/assets/service4.png", size: "lg:col-span-1 col-span-2 row-span-1" },
  { image: "src/assets/service5.png", size: "lg:col-span-1 col-span-2 row-span-1" },
];

const Services = () => {
  return (
    <>
      <section className="services relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
      

          <section className="">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-2xl font-semibold text-indigo-600">Our Services</h2>
              <p className="mt-2 text-4xl font-semibold text-gray-900 sm:text-5xl">
                Services we offer in Market
              </p>
              <p className="mt-6 text-lg text-gray-600">
                "Our social marketing platform is designed to revolutionize the way businesses connect with their audience."
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-6xl">
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`rounded-xl shadow hover:shadow-lg overflow-hidden ${service.size}`}
                  >
                    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src={service.image} alt={`Service ${index + 1}`} />
                  </div>
                ))}
              </section>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Services;