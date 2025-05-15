import React from "react";
import "/src/App.css";
import { logos } from "../data";

const CompaniesLogo = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="w-full overflow-hidden space-y-10 sm:space-y-0 md:py-30 py-10  flex sm:flex-row flex-col sm:items-center items-start">
          <div className="w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-slate-100 rounded-sm py-2 z-10 sm:text-base text-xl font-semibold text-left px-5">
            proud partner at <br /> Hubspot & segment
          </div>

          <div className="flex gap-20 animate-marquee">
            {/* you need to always provide index when working with map() */}
            {logos.map((logo, index) => (
              <div key={index}>
                <img
                  className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  width={100}
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaniesLogo;
