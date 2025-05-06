import React from "react";
import Services from "./Services";

const Features = ({ isDarkMode }) => {
  return (
    <>
      <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white"}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <section className="">
                <Services/>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
