import externalLinkIcon from "./assets/icons8-external-link-50.png";
import WorkPic from "./assets/Hanzel May website UI.jpeg";
import { Link } from "react-router-dom";

const Work = () => {
    return <>
        <div className="container mx-auto py-4" id="work">
            <h2 className="text-center  my-10 font-bold text-xl md:text-2xl">My Work</h2>
            <div className="px-4 flex lg:w-1/2 mx-auto flex-col">
                <img src={WorkPic} className="w-full border rounded-xl shadow-xl cursor-pointer" alt="Tourism Website" />
                <div>
                    <h1 className="font-bold md:text-2xl text-lg mt-5">The NFT Project</h1>
                    <p className="md:text-xl mt-2 text-[16px] text-[#787D81]">Discover a world of digital art like never before with our exclusive collection of NFTs.</p>
                </div>
                <div className="flex gap-4 items-center">
                    <a href="https://github.com/ZaynHamid/The-NFT-Project" target="_blank" rel="noreferrer">
                        <button className='bg-[#121111] sm:px-6 px-3 py-2 mt-4 text-white md:font-semibold hover:bg-[#121111]/90 flex gap-3 transition-all duration-150 rounded-lg shadow'>
                            View Source Code
                            <img src={externalLinkIcon} className="md:w-[20px] mt-0.5 w-[16px]" alt="external-link" />
                        </button>
                    </a>
                </div>
                <Link to="/work">
                    <button className='bg-[#121111] md:px-6 px-3 md:py-3 py-1.5 mt-8 w-full text-white font-semibold hover:bg-[#121111]/90 transition-all rounded-lg duration-150 shadow'>
                        See my Work
                    </button>
                </Link>

            </div>
        </div >
    </>;
}

export default Work;