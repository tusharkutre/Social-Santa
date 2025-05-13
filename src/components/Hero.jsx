import { useDarkTheme } from "./DarkThemeProvider";
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-center container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* left div */}
        <div className="w-full md:w-[50%] space-y-8">
          {/* star */}
          <div className="flex items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span>⭐</span>
            <span className={`text-black`}>Jump start your growth</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            We boost the growth for{" "}
            <span className="text-blue-600 relative inline-block">
              {" "}
              startup to fortune 500
            </span>{" "}
            companies <span className="inline-block  animate-bounce">🚀</span>
          </h1>

          <p className="text-gray-600 font-medium text-lg md:text-xl max-w-xl">
            Get the most accurate leads,sales people training and conversation ,
            tools and more - all within the same one billing
          </p>

          <div className="form flex w-fit gap-2">
            <input 
            placeholder="Email Address"
            className="flex-1 font-semibold px-6 py-4 border-[2.5px] border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
            type="email" />
            <button className="bg-blue-600 text-white cursor-pointer font-semibold px-6 py-4 rounded-xl hover:bg-blue-700 items-center hover:shadow-2xl transition-all">
              <ChevronRightIcon className="h-5 w-5"/>
            </button>
          </div>
        </div>

        {/* right div with image*/}
        <div className="w-full md:w-[50%] mt-16 md:mt-0 pl-0 md:pl-12">
          <div className="relative lg:h-[500px]">
            <img 
            className="rounded-lg relative z-10 hover:scale-95 ease-in-out transition-transform duration-300"
            src={hero} 
            alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
}

<div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
      className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    />
  </div>
  <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full bg-white font-medium px-3 py-2 text-md text-black/80 ring-2 ring-gray-900/10 hover:ring-gray-900/20">
        Join our dynamic Team Social Santa 🚀.
        <a href="#" className="font-semibold text-indigo-600">
          <span aria-hidden="true" className="absolute inset-0" />
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
    <div className="text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-400 sm:text-7xl">
        Data to enrich your online business
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Our platform ensures swift, secure, and seamless delivery, empowering
        businesses to reach customers with ease.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
      className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    />
  </div>
</div>;

