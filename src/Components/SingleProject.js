const Project = ({ tech, name, desc, live, code }) => {
  return (
    <>
      <div className="w-80 sm:w-96 flex flex-col flex-shrink-0">
        <img className="h-56 sm:h-60 w-full rounded-xl" src="" alt="" />
        <div className="">
          <p className="text-2xl font-semibold p-1">{name}</p>
          <p className="px-1">{tech.join(", ")}</p>
          <p className="px-1">{desc}</p>
          <div className="flex gap-4 px-1 py-2">
            <button className="md:text-lg border border-orange-300 py-1 px-2 rounded-md">
              live {"🚀"}
            </button>
            <button className="md:text-lg border border-orange-300 py-1 px-2 rounded-md">
              code {"</>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
