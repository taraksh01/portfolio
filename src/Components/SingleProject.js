import { Link } from "react-router-dom";

const Project = ({
  projectName,
  description,
  techStack,
  live,
  code,
  image,
}) => {
  return (
    <div className="w-full transition-all duration-500 hover:scale-105 flex flex-col flex-shrink-0">
      <div className="">
        <img className="object-contain" src={image} alt="project image" />
      </div>
      <div>
        <p className="text-2xl font-semibold px-1 my-2">{projectName}</p>
        <p className="mx-1 my-2">{description}</p>
        <p className="mx-1 my-2">
          <span className="font-bold">Tech Stack:</span> {techStack?.join(", ")}
        </p>
        <div className="flex justify-evenly items-center m-4">
          <Link
            to={live}
            target="_blank"
            className="md:text-lg transition-all duration-300 border hover:border-orange-400 p-2 rounded-md"
          >
            live {"🚀"}
          </Link>
          <Link
            to={code}
            target="_blank"
            className="md:text-lg transition-all duration-300 border hover:border-orange-400 p-2 rounded-md"
          >
            code {"</>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
