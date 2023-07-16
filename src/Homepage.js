import React from 'react';
import Nav from "./Nav";
import Hero from './hero';
import About from "./about";
import Work from "./my-work";
import Footer from "./footer";
import Contact from './contact';
const Homepage = () => {
    return <>
        <div className="container mx-auto">
            <Nav />
        </div>
        <div>
            <Hero />
        </div>
        <About />
        <Work />
        <Contact />
        <Footer />

    </>
}

export default Homepage;