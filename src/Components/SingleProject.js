import { Link } from "react-router-dom";

const Project = ({ tech, name, desc, live, code, image }) => {
  return (
    <div className="w-full sm:w-96 flex flex-col flex-shrink-0">
      <img
        className="h-56 sm:h-60 w-full rounded-xl"
        src={image}
        alt="project image"
      />
      <div>
        <p className="text-2xl font-semibold px-1 my-2">{name}</p>
        <p className="mx-1 leading-tight text-justify my-2 text-xl">{desc}</p>
        <p className="mx-1 leading-tight text-justify my-2 text-xl">
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
