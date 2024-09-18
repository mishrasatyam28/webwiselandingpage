import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

export default RevealBento;

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Welcome to Webwise Digital.{" "}
      <span className="text-zinc-400">
        We build cutting-edge websites that drive results.
      </span>
    </h1>

    <a
      href="https://webwisedigital.in/contactus"
      target="_blank"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/webwisedigitalpvtltd/"
        target="blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-600 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/company/webwise-digital-pvt-ltd"
        target="blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaLinkedin color="white" />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://www.facebook.com/people/WebWise-Digital-Pvt-Ltd/61552903648554/"
        target="blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <FaFacebook color="white" />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-800 md:col-span-3"
    >
      <a
        href="https://x.com/WebwiseD"
        target="blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaXTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      Our passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        At our core, we specialize in crafting high-performance digital
        experiences using cutting-edge technologies like React, Tailwind CSS,
        and Framer Motion. These tools empower us to create sleek, engaging
        websites that captivate audiences and drive results. Beyond development,
        we’ve shared our insights and strategies through numerous digital
        channels, reaching audiences on platforms like YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Delhi</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg text-zinc-400 md:text-2xl">
      Discover cutting-edge marketing tips, exclusive insights, and industry
      trends delivered straight to your inbox.
    </p>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center justify-center">
      <img src="./logo.svg" className="size-28 py-4" alt="" />
    </div>
  );
};
