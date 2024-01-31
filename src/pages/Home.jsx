import { MdKeyboardArrowRight } from "react-icons/md";
import hero from "../assets/portfolio/mahfujq.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>

  <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-4xl sm:text-7xl font-bold">
            Im a Front-End Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md capitalize">
            I have 3 years of Experienced and ambitious web design professional.
            Currently, i love to work on web application using technologies like
            React, Tailwind, Javascripts, Sass and Github.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 
                    to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="herro images"
            className="rounded-2xl mx-auto w-2/3 md:w-full bg-blue-600"
          />
        </div>
      </div>
      
    </div>
        
    </>
  )
}

export default Home