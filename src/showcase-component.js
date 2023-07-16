import React from 'react';
const Showcase = props => {

    return <>
        <div className='lg:w-3/4 md:flex mx-auto gap-12 justify-center mt-20 items-center '>

            <div className='md:w-1/2 p-3 rounded-xl shadow-2xl border overflow-hidden bg-white'>
                <img src={props.image} className='w-full ' alt="My Work" />

            </div>

            <div className='md:w-1/2 md:my-0 my-8 px-5'>
                <h2 className='my-3 font-bold md:text-2xl text-lg'>{props.title}</h2>
                <p className='text-[#787D81] md:text-lg'>
                    {props.text}
                </p>
                <div className='flex gap-4 md:my-0 my-3'>
                    <a href={props.link} target='_blank' rel="noreferrer">
                        <button className='bg-[#121111] md:px-4 px-2 py-2 mt-4 text-white font-semibold hover:bg-[#121111]/90 flex gap-3 transition-all duration-150 rounded-lg shadow'>
                            {props.buttonText}
                        </button>

                    </a>

                </div>

            </div>
        </div>
    </>
}

export default Showcase;