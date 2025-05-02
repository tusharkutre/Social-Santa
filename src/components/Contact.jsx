import Form from './Form'

export default function Contact({isDarkMode}) {

  return (
    <div className={`isolate px-6 py-24 sm:py-32 lg:px-8 ${isDarkMode ? "bg-black text-white" : "bg-white"}`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className={`text-4xl font-semibold tracking-tight text-balance sm:text-5xl ${isDarkMode ? "text-white" : "text-black"}`}>Contact Us</h2>
        <p className={`mt-4 text-lg/8 text-gray-600 ${isDarkMode ? "text-white" : "text-black"}`}>"Social Santa—always ready to help. Reach out today! ❤️"</p>
      </div>

      {/* form component */}
      <Form isDarkMode={isDarkMode} />
    </div>
  )
}
