import { IoMailUnreadOutline } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-gray-100 flex-shrink-0"></div>
      <footer className="max-w-screen-xl mx-auto text-gray-100 flex justify-between flex-col font-mono">
        <div className="flex justify-between items-center my-10">
          <div className="flex flex-col gap-1 text-lg">
            <p>
              <span className="pr-4 text-xl font-semibold">Tarak</span>
              taraksh01@gmail.com
            </p>
            <p>Front-end developer</p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="text-2xl font-semibold">Available here</p>
            <div className="flex gap-5 items-end">
              <ImLinkedin2 className="text-orange-400 text-4xl" />
              <RiTwitterXLine className="text-orange-400 text-3xl" />
              <VscGithubInverted className="text-orange-400 text-3xl" />
              <PiTelegramLogo className="text-orange-400 text-3xl" />
            </div>
          </div>
        </div>
        <div className="text-lg flex justify-center items-center my-5">
          <AiOutlineCopyright className="inline text-2xl pr-2" /> copyright 2023
          Made by Tarak
        </div>
      </footer>
    </>
  );
};

export default Footer;
