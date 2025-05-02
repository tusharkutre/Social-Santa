import React from "react";

const services = [
  "Social Media Marketing",
  "Influencer Marketing",
  "Performance Ads",
  "Content Strategy",
  "Website Development",
  "SEO Optimization",
];

const Features = ({ isDarkMode }) => {
  return (
    <>
      <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white"}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Our services
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Services we offer in Market
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              "Our social marketing platform is designed to revolutionize the
              way businesses connect with their audience. By leveraging advanced
              tools for content creation, campaign management, and analytics"
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <section className=" px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {services.map((service) => (
                  <div
                    key={service}
                    className="p-6 text-white  dark:bg-gray-700 rounded-xl shadow hover:shadow-lg"
                  >
                    <h3 className="text-xl font-semibold">{service}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
