import React, { useEffect } from "react";

const Nav = props => {
    useEffect(() => {
        const smoothScroll = (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const links = document.querySelectorAll('.smooth-scroll');

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', smoothScroll);
        }

        return () => {
            for (let i = 0; i < links.length; i++) {
                links[i].removeEventListener('click', smoothScroll);
            }
        };
    }, []);

    return <>
        <div className="flex flex-col py-4">
            <h1 className="uppercase cursor-pointer select-none font-bold md:text-3xl text-xl text-center my-2 md:my-4">Zayn</h1>
            <div>

                <ul className="flex items-center flex-row justify-center md:gap-6 gap-4 md:text-lg uppercase font-semibold">
                    <li><a href="#home" className="smooth-scroll  md:text-lg lead  hover:text-blue-600">Home</a></li>
                    <li><a href="#about" className="smooth-scroll md:text-lg lead   hover:text-blue-600">About</a></li>
                    <li><a href="#work" className="smooth-scroll  md:text-lg lead  hover:text-blue-600">My Work</a></li>
                    <li><a href="#contact" className="smooth-scroll  md:text-lg lead  hover:text-blue-600">Contact</a></li>
                </ul>

            </div>
        </div>
    </>
}

export default Nav;