import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeButton from "./DarkModeButton";
import { useDarkTheme } from "./DarkThemeProvider";
import { navigation } from "../data";

const Navbar = () => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink , setActiveLink] = useState();
  const { isDarkMode, toggleDarkMode } = useDarkTheme(); // Using the custom hook to get the dark mode state and toggle function
  return (
    <>
        <nav
          className="flex items-center sticky top-0 z-50 justify-between p-6 lg:px-8"
        >
          <div className="flex  lg:flex-1">
            <a href="/" className="flex items-center flex-row-reverse gap-2">
              <h2 className="text-2xl font-medium hidden md:block">
                Social Santa
              </h2>
              <svg
                width="35"
                height="35"
                viewBox="0 0 49 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
                  fill="#FF0A0A"
                ></path>
              </svg>
            </a>
          </div>
          {/* for mobile screen */}
          <div
            className={`flex lg:hidden rounded-full py-3 px-4 gap-3 ${
              isDarkMode ? "bg-white text-black" : "bg-slate-400/50 text-white"
            }`}
          >
            <DarkModeButton
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* for laptop screens */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item,index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                className={`text-md font-semibold ${
                  isDarkMode
                    ? " text-white hover:bg-white hover:text-black px-2 py-2 rounded-2xl"
                    : "text-black hover:bg-black hover:text-white px-2 py-2 rounded-2xl"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* dark mode button on laptop */}
          <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
          <button className=" bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium w-fit transition-all hover:shadow-lg hover:shadow-blue-200">
                    Get in Touch
                  </button>
            {/* dark mode theme */}
            <DarkModeButton
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
          </div>
        </nav>

        {/* Dialog UI for mobile screen */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden block"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 49 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
                    fill="#FF0A0A"
                  ></path>
                </svg>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="container mx-auto">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}

                  {/* get in touch button */}
                  <button className="lg:hidden bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium w-full transition-all hover:shadow-lg hover:shadow-blue-200">
                    Get in Touch
                  </button>
                </div>

                <div className=""></div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>

    </>
  );
};

export default Navbar;
