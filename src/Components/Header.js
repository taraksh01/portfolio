import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { name: "home", url: "/" },
    { name: "works", url: "/projects" },
    { name: "about", url: "/about" },
    { name: "contact", url: "/contact" },
    { name: "hire-me", url: "/hire" },
  ];

  return (
    <div className="sticky top-0 bg-black z-10">
      <header className="max-w-screen-xl h-16 mx-auto text-gray-200 flex items-center justify-between font-mono">
        <Link to={"/"} className="hover:text-white active:text-white mx-2">
          <h1 className="text-2xl font-semibold mx-4">Tarak Shaw</h1>
        </Link>
        <nav className="hidden sm:flex gap-6 mx-2">
          {navItems?.map((item) => (
            <Link
              to={item?.url}
              key={item?.name}
              className="hover:text-white active:text-white"
            >
              <p className="text-xl">
                <span className="text-orange-400">#</span>
                {item?.name}
              </p>
            </Link>
          ))}
        </nav>
        <button className="flex sm:hidden mx-2">
          {showMenu ? (
            <RxCross2
              className="text-orange-400 text-3xl"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-orange-400 text-3xl"
              onClick={() => setShowMenu(true)}
            />
          )}
        </button>
      </header>
      <Menu status={showMenu} setStatus={setShowMenu} navItems={navItems} />
    </div>
  );
};

const Menu = ({ status, setStatus, navItems }) => {
  return (
    <div className={status ? "visible h-screen sm:hidden" : "hidden"}>
      <nav className="flex sm:hidden flex-col bg-black gap-10 mx-4 my-10 text-2xl text-gray-200">
        {navItems?.map((item) => (
          <Link
            to={item?.url}
            key={item?.name}
            onClick={() => setStatus(false)}
            className="hover:text-white active:text-white"
          >
            <p>
              <span className="text-orange-400">#</span>
              {item?.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
