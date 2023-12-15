import Project from "./SingleProject";
import { largeProjects, miniProjects } from "../projects";

const Projects = () => {
  return (
    <main className="max-w-screen-xl mx-auto my-10 text-gray-200 flex flex-col font-mono">
      <h2 className="text-3xl mx-4 md:mx-2 my-3">
        <span className="text-orange-400">/</span>projects
      </h2>
      <p className="mx-4 md:mx-2 sm:text-lg">List of my projects</p>
      <div className="mx-4 md:mx-2">
        <div className="my-10">
          <h2 className="text-2xl md:text-3xl">
            <span className="text-orange-400">#</span>Large-web-apps
          </h2>
        </div>
        <div className="sm:mx-4 grid grid-flow-row grid-cols-1 justify-center sm:grid-cols-4 gap-6">
          {largeProjects?.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
      <div className="mx-4 md:mx-2">
        <div className="my-10">
          <h2 className="text-2xl md:text-3xl">
            <span className="text-orange-400">#</span>Mini-web-apps
          </h2>
        </div>
        <div className="sm:mx-4 grid grid-flow-row grid-cols-1 justify-center sm:grid-cols-4 gap-6">
          {miniProjects?.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
