const Header = () => {
  return (
    <>
      <header className="max-w-screen-xl h-14 mx-auto text-gray-100 flex items-end justify-between font-mono">
        <h1 className="text-2xl font-semibold cursor-pointer text-white">
          Tarak Shaw
        </h1>
        <nav className="flex gap-6">
          <p className="text-lg cursor-pointer hover:text-white active:text-white">
            <span className="text-orange-400">#</span>home
          </p>
          <p className="text-lg cursor-pointer hover:text-white active:text-white">
            <span className="text-orange-400">#</span>projects
          </p>
          <p className="text-lg cursor-pointer hover:text-white active:text-white">
            <span className="text-orange-400">#</span>about
          </p>
          <p className="text-lg cursor-pointer hover:text-white active:text-white">
            <span className="text-orange-400">#</span>contact
          </p>
        </nav>
      </header>
    </>
  );
};

export default Header;
