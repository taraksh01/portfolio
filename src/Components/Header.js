import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 bg-black pb-1">
      <header className="max-w-screen-xl h-16 mx-auto text-gray-200 flex items-end justify-between font-mono">
        <Link to={"/"} className="hover:text-white active:text-white">
          <h1 className="text-2xl font-semibold">Tarak Shaw</h1>
        </Link>
        <nav className="flex gap-6">
          <Link to={"/"} className="hover:text-white active:text-white">
            <p className="text-xl">
              <span className="text-orange-400">#</span>home
            </p>
          </Link>
          <Link to={"/projects"} className="hover:text-white active:text-white">
            <p className="text-xl cursor-pointer">
              <span className="text-orange-400">#</span>works
            </p>
          </Link>
          <Link to={"/about"} className="hover:text-white active:text-white">
            <p className="text-xl">
              <span className="text-orange-400">#</span>about-me
            </p>
          </Link>
          <Link to={"/contact"} className="hover:text-white active:text-white">
            <p className="text-xl">
              <span className="text-orange-400">#</span>contacts
            </p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
