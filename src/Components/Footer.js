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
      <div className="w-full h-px bg-gray-100 flex-shrink-0"></div>
      <footer className="max-w-screen-xl mx-auto text-gray-100 flex justify-between flex-col font-mono">
        <div className="flex justify-between items-center my-10">
          <div className="flex flex-col gap-1 text-lg">
            <p>
              <Link
                to={"https://github.com/taraksh01"}
                target="_blank"
                rel="noreferrer noopener"
                className="pr-4 text-xl font-semibold"
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
            <p>Front-end developer</p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="text-2xl font-semibold">Available here</p>
            <div className="flex gap-5 items-end">
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
        <div className="text-lg flex justify-center items-center my-5">
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
