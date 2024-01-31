import { MdMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkdin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mahfuja-masuma-0b467a183/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Mahfuja-Masuma",
    },
    {
      id: 3,
      child: (
        <>
          Mail <MdMailOutline size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BiSolidUserDetail size={30} />
        </>
      ),
      href: "/Mahfuja Masuma.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white z-[99]"
              download={download}
              target=" _blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
