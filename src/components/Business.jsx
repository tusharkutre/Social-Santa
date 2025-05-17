import React from 'react'
import { features } from '../data'

const Business = () => {
  return (
    <>
        <section className='max-w-7xl mx-auto px-4 py-16'>
            {/* heading text div */}
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold mb-4'>How can we help your business grow?</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium?</p>
            </div>

            {/* grid container div */}
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {features.map((feature,index)=> (
                      <div className='mx-auto rounded-xl bg-gray-100/10  flex flex-col text-center items-center p-16' key={index}>
                        <div 
                        style={{background : index === 0 ? "#F1EFF0" : index === 1? "#FEE7E7" : "#FFF3E4" }}
                        className='w-20 h-20 rounded-full mb-6 flex items-center justify-center'>
                            <div className='text-3xl'>
                                {feature.icon}
                            </div>
                        </div>
                            <h3 className='text-2xl font-medium mb-3'>{feature.title}</h3>
                            <p className='text-gray-500 text-center'>{feature.desc}</p>
                      </div>  
                    ))}
            </div>

            {/* button */}
            <div className='text-center mt-12'>
              <button className='bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative hover:shadow-lg hover:shadow-blue-400'>Become a Partner
                <span className='absolute -z-10 w-full h-full rounded-full hover:blur-md bg-blue-600/50 blur-xl top-0 left-0'></span>
              </button>
            </div>
        </section>
    </>
  )
}

export default Business