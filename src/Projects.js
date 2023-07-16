import React, { useEffect } from 'react';
import Footer from './footer';
import image from "./assets/Hanzel May website UI.jpeg";
import Showcase from './showcase-component';
import { Link } from 'react-router-dom';
import tourist from "./assets/tourist.png";
import weatherForecast from "./assets/weather-forecast.png";
import photography from "./assets/photography.png";
import sass from "./assets/sass.png";

const Projects = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return <>
        <div className="flex flex-col py-4">
            <h1 className="uppercase cursor-pointer select-none font-bold md:text-3xl text-xl text-center my-2 md:my-4">
                <Link to="/">Zayn</Link>
            </h1>
            <div>

                <ul className="flex my-2 items-center flex-row justify-center gap-6 md:text-lg uppercase font-semibold">
                    <li><Link to="/" className="border bg-slate-200/80 md:text-lg lead font-semibold px-3 rounded-lg">/</Link></li>
                </ul>
            </div>
        </div>

        <h2 className='md:my-6 my-3 text-center font-bold lg:text-3xl md:text-2xl text-xl'>My Project</h2>

        <div className='container mx-auto'>
            <p className='text-[#787D81] md:w-1/2 mx-auto text-center md:px-0 px-3 md:text-lg'>Here are some of the projects I would like to share with you for discussion and feedback. I've put a significant amount of effort into these projects, and I'm excited to hear your thoughts on them.</p>

            <Showcase buttonText="View Source Code" link="https://github.com/ZaynHamid/The-NFT-Project" text="The NFT showcase is made to showcase, purchasing and selling of NFTs. It's fully responsive and was coded with Bootstrap and HTML. It's basically a UI for non-fungible tokens designed with responsive layouts." image={image} title="NFTs Showcase" />

            <Showcase text="The tourism website which shows the beauty of Costa Rica. It takes pick & drop location, number of passengers and return estimated fare and traveling time. It was also coded with Bootstrap, JavaScript and Html." image={tourist} link="https://github.com/ZaynHamid/travelling-website" buttonText="View Source Code" title="Travelling Website" />

            <Showcase text="The weather forecast project showing user's time, weekly weather, hourly weather and local time from any country. It was coded with TailwindCSS, JavaScript and HTML. It was basically a full website but the main focus the weather section." link="https://github.com/ZaynHamid/weather-forecast" buttonText="View Source Code" image={weatherForecast} title="Weather Forecast" />

            <Showcase buttonText="Visit Website" text="The photographer website used to show photographer's works. It was designed with React, TailwindCSS and react-router-dom. It shows the beautiful alignment of images using grid and behaves full responsive." image={photography} title="Photography Website" />

            <Showcase text="The SASS website UI showing all the useful features and points like FAQs, Service, Team etc. It was made with Bootstrap and HTML. It is responsive and adaptive to all screen sizes." buttonText="View Source Code" link="https://github.com/ZaynHamid/sass-website" image={sass} title="SASS website UI" />

        </div>
        <Footer />
    </>
}

export default Projects;


