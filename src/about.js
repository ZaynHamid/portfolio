import React from 'react';
import { ReactIcon, HtmlIcon, FigmaIcon, Css3Icon, BootstrapIcon, SassIcon, GitHubIcon } from "./icons";
import tailwindIcon from './assets/tailwind-css-icon.png';
import JavaScriptIcon from "./assets/5968292.png";

const About = () => {
    return <>
        <div className='container my-16 mx-auto py-6' id='about'>
            <h2 className='text-center md:text-2xl text-xl font-bold'>Get to know about me!</h2>
            <p className='text-center my-3 md:text-lg text-slate-600 md:px-0 px-3'>
                Here you will get to know about me, my technical skills, what I've done and what I am capable of.
            </p>
            <div className='md:flex justify-center lg:w-2/3 mx-auto md:gap-10 gap-5 md:px-4 px-8'>
                <div className='md:w-1/2 my-4'>
                    <h2 className='my-4 text-xl font-semibold'>About me</h2>
                    <p className='text-[#787D81] md:text-lg'>
                        I am a front-end developer with over 3 years of experience in building responsive, mobile-first web applications with the listed technologies.
                        I have a thorough understanding of working with the latest techniques and technologies, which make the website work faster and more efficiently.
                    </p><br />
                    <p className='text-[#787D81] md:text-lg'>
                        I currently work as a freelancer on platforms like Fiverr and Upwork. With a track record of successfully serving over 30 clients,
                        I have maintained an impressive average rating of 4.8.
                    </p><br />
                    <p className='text-[#787D81] md:text-lg'> I am always open to new opportunities and to collaborate with professional teams and deliver outstanding results.
                        I am willing to acquire new skills that are necessary to enhance your project.
                    </p>
                    <a href='#contact'>
                        <button className='bg-[#5c5c5c] md:px-4 px-2 py-2 mt-4 text-white font-semibold rounded-xl hover:bg-[#5c5c5c]/80 transition-all duration-150 shadow'>Get in touch</button>
                    </a>
                </div>
                <div className='md:w-1/2 md:my-0 mt-10'>
                    <h2 className='my-4 text-xl font-semibold'>My Skills</h2>
                    <div className='flex gap-6 flex-wrap'>

                        <div className='skills'>
                            <ReactIcon />
                            React
                        </div>
                        <div className='skills'>
                            <SassIcon />
                            SASS
                        </div>
                        <div className='skills'>
                            <HtmlIcon />
                            HTML
                        </div>
                        <div className='skills'>
                            <Css3Icon />
                            CSS
                        </div>
                        <div className='skills'>
                            <BootstrapIcon />
                            Bootstrap
                        </div>
                        <div className='skills'>
                            <img src={tailwindIcon} width={26} alt="Tailwind Icon" />
                            TailwindCSS
                        </div>
                        <div className='skills'>
                            <FigmaIcon />
                            Figma
                        </div>
                        <div className='skills'>
                            <GitHubIcon />
                            Github
                        </div>
                        <div className='skills'>
                            <img src={JavaScriptIcon} width={26} alt="JavaScript Icon" />
                            JavaScript
                        </div>
                        <div className='skills'>
                            Redux
                        </div>
                        <div className='skills'>
                            NextJS
                        </div>
                        <div className='skills'>
                            Responsiveness
                        </div>



                    </div>
                </div>


            </div>
        </div >
    </>;
}

export default About;