import arraydis from "../assets/portfolio/array.png";
import navbar from "../assets/portfolio/navbar.jpg";
import installnode from "../assets/portfolio/install node.jpg";
import parallax from "../assets/portfolio/parallax.jpg";
import smothscroll from "../assets/portfolio/smoth scroll.jpg";
import tourTravle from "../assets/portfolio/tour-travle.png";
import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      name: arraydis,
      // src:
    },
    {
      id: 2,
      name: navbar,
      // src:
    },
    {
      id: 3,
      name: installnode,
      // src:
    },
    {
      id: 4,
      name: parallax,
      // src:
    },
    {
      id: 5,
      name: smothscroll,
      // src:
    },
    {
      id: 6,
      name: tourTravle,
      src:"https://tour-and-travel-liart.vercel.app/"
    },
  ];
  return (  
    <>
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

         {portfolio.map(({ id, src,name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={name}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={src}  className="w-1/2 cursor-pointer px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo 
                </a>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
          </div>

      </div>
    </div>
    </>
  );
};

export default Portfolio;
