import { IoMailUnreadOutline } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";
import { PiTelegramLogo } from "react-icons/pi";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-gray-200 flex-shrink-0"></div>
      <footer className="max-w-screen-xl mx-auto  text-gray-200 flex justify-between flex-col font-mono">
        <div className="flex flex-col sm:flex-row justify-between items-center my-8 mx-4 gap-5">
          <div className="flex flex-col gap-1">
            <p>
              <Link
                to={"https://github.com/taraksh01"}
                target="_blank"
                rel="noreferrer noopener"
                className="pr-4 font-bold"
              >
                Tarak
              </Link>
              <Link
                to={
                  "mailto:taraksh01@gmail.com?subject=Say%20Namaste&body=Namaste%20Tarak"
                }
                target="_blank"
                rel="noreferrer noopener"
              >
                taraksh01@gmail.com
              </Link>
            </p>
            <p className="text-center sm:text-left">Front-end developer</p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="text-xl font-semibold">Available here</p>
            <div className="flex items-end justify-between">
              <Link
                to={"https://www.linkedin.com/in/taraksh01/"}
                target="_blank"
                rel="noreferrer noopener"
                className="text-orange-400 text-4xl"
              >
                <ImLinkedin2 />
              </Link>
              <Link
                to={"https://twitter.com/taraksh01"}
                target="_blank"
                rel="noreferrer noopener"
                className="text-orange-400 text-3xl"
              >
                <RiTwitterXLine />
              </Link>
              <Link
                to={"https://t.me/taraksh01"}
                target="_blank"
                rel="noreferrer noopener"
                className="text-orange-400 text-3xl"
              >
                <PiTelegramLogo />
              </Link>
              <Link
                to={"https://github.com/taraksh01"}
                target="_blank"
                rel="noreferrer noopener"
                className="text-orange-400 text-3xl"
              >
                <VscGithubInverted />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-2">
          <AiOutlineCopyright className="inline text-2xl pr-2" /> copyright 2023
          Made by
          <Link
            to={"https://github.com/taraksh01"}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold px-2"
          >
            Tarak
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
