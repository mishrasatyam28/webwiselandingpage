import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const titles = ["We Create", "Eye-opening", "presentations"];
  const below_border = [
    "For businesses big and small",
    "From first click to loyal customer",
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="TextStructure mt-32 px-20">
        {titles.map((title, index) => (
          <div key={index} className="Masker ">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.6, -0.05, 0.01, 0.99], duration: 3 }}
                  className="mr-[0.5vw] w-[10vw] bg-[url('https://res.cloudinary.com/dby6tugob/image/upload/v1726465471/y4zm9zjnwoq3sxhu4rqp.png')] rounded-md h-[6vw] relative -top-[0.3]"
                ></motion.div>
              )}
              <h1 className="uppercase text-[6vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-bold text-white md:text-[7vw]">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 tracking-tight leading-none py-5 px-20 text-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
        {below_border.map((phrase, index) => (
          <p key={index} className="text-lg font-light ">
            {phrase}
          </p>
        ))}

        <div className="start flex gap-5 items-center text-gray-300 md:flex">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase font-light text-lg  ">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <Link to={"https://webwisedigital.in/contactus"} target="blank">
                <FaLongArrowAltUp />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
