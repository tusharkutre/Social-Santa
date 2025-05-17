import React from 'react'
import monitor from "../assets/monitor.webp";

const Monitor = () => {
  return (
    <>
    <div className="flex max-w-7xl mx-auto px-4 py-16 md:py-24">
        <section className="flex mx-auto lg:flex-row-reverse md:flex-row-reverse flex-col lg:gap-10">
          {/* left div */}
          <div className="statsImageLogo">
            <img src={monitor} alt="" className="w-full h-auto"/>
          </div>

          {/* right div */}
          <div className="parentDiv flex items-center">
            <div className="childDiv space-y-2">
              <p className="text-orange-400 font-medium">Schedule</p>
              <h2 className="md:text-4xl text-neutral-800 text-3xl font-semibold">Streamline Your business with smart scheduling solutions</h2>
              <p className="mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
                animi!
              </p>
              <div className="flex items-center gap-2">
                <button className="cursor-pointer text-blue-600 font-medium">
                  Explore scheduling Features{" "}
                </button>
                {/* <ArrowRightIcon className="h-5 text-blue-600" /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Monitor