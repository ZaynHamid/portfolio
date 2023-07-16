import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./icons";

const Footer = () => {
    return <>
        <div className="w-full bg-[#121111] mt-32 md:p-16 p-8">
            <div className="md:flex justify-between lg:w-2/3 mx-auto items-center">
                <div className="text-white">
                    <h2 className="md:text-3xl text-xl uppercase font-bold">Zayn</h2>
                    <p className="md:w-2/3 my-3 md:text-lg text-[14px]">A front-end developer with over 3 years of experience known as practical and effective developer, experienced in building fast cross-browser web applications under time-pressure and within your budget.</p>
                </div>
                <div className="md:mt-0 mt-8" style={{ color: "white" }}>
                    <div className="flex gap-4">
                        <a href='https://www.linkedin.com/in/zayn-hamid-8ba669200/' target='_blank' rel='noreferrer'>
                            <LinkedInIcon />
                        </a>

                        <a href='https://github.com/zaynhamid' target='_blank' rel='noreferrer'>
                            <GitHubIcon />
                        </a>

                        <a href='https://twitter.com/Web_Dev_Zayn' target='_blank' rel='noreferrer'>
                            <TwitterIcon />
                        </a>

                    </div>
                    <p className="md:text-lg mt-2">or contact me via email</p>
                    <p className="md:text-xl text-[16px] my-1 font-light">zainhamid982@gmail.com</p>
                </div>
            </div>
        </div>
    </>
}

export default Footer;

