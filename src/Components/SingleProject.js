import { Link } from "react-router-dom";

const Project = ({ tech, name, desc, live, code, image }) => {
  return (
    <div className="w-full sm:w-96 flex flex-col flex-shrink-0">
      <img className="h-56 sm:h-60 w-full rounded-xl" src={image} alt="" />
      <div>
        <p className="text-2xl font-semibold px-1 my-2">{name}</p>
        <p className="px-1 text-justify my-1">{desc}</p>
        <p className="px-1 text-justify my-1">
          <span className="font-bold">Tech Stack:</span> {tech.join(", ")}
        </p>
        <div className="flex justify-evenly items-center m-4">
          <Link
            to={live}
            target="_blank"
            className="md:text-lg transition-all duration-300 border hover:border-orange-300 p-2 rounded-md"
          >
            live {"🚀"}
          </Link>
          <Link
            to={code}
            target="_blank"
            className="md:text-lg transition-all duration-300 border hover:border-orange-300 p-2 rounded-md"
          >
            code {"</>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
