const Project = ({ tech, name, desc, live, code }) => {
  return (
    <>
      <div className="">
        <img className="h-64 w-full rounded-xl" src="" alt="" />
        <p className="text-3xl font-semibold p-2">{name}</p>
        <p className="text-lg p-1">{tech.join(", ")}</p>
        <p className="text-lg p-1">{desc}</p>
        <div className="flex gap-4 p-1 xl:py-2">
          <button className="text-lg border border-orange-300 p-1 rounded-md">
            live {"🚀"}
          </button>
          <button className="text-lg border border-orange-300 p-1 rounded-md">
            code {"</>"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
