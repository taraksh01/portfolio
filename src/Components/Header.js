import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="max-w-screen-xl h-14 mx-auto text-gray-100 flex items-end justify-between font-mono">
        <Link to={"/"}>
          <h1 className="text-2xl font-semibold cursor-pointer text-white">
            Tarak Shaw
          </h1>
        </Link>
        <nav className="flex gap-6">
          <Link to={"/"}>
            <p className="text-xl cursor-pointer hover:text-white active:text-white">
              <span className="text-orange-400">#</span>home
            </p>
          </Link>
          <Link to={"/projects"}>
            <p className="text-xl cursor-pointer hover:text-white active:text-white">
              <span className="text-orange-400">#</span>projects
            </p>
          </Link>
          <Link to={"/about"}>
            <p className="text-xl cursor-pointer hover:text-white active:text-white">
              <span className="text-orange-400">#</span>about
            </p>
          </Link>
          <Link to={"/contact"}>
            <p className="text-xl cursor-pointer hover:text-white active:text-white">
              <span className="text-orange-400">#</span>contact
            </p>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
