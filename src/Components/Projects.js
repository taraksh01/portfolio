import Project from "./SingleProject";

const Projects = () => {
  return (
    <article className="max-w-screen-xl mx-auto m-10 text-white font-mono">
      <div className="flex justify-between my-10">
        <div className="flex items-center w-2/3">
          <h2 className="text-4xl">
            <span className="text-orange-400">#</span>projects
          </h2>
          <div className="w-2/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
        </div>
        <button className="text-xl">
          view all <span>{"-->"}</span>
        </button>
      </div>
      <div className="flex justify-between gap-6">
        <Project
          tech={["React", "tailwind", "parcel"]}
          name={"project 1"}
          desc={"This is a short description for project"}
          live={"https://github.com/taraksh01/pet-pooja"}
          code={"https://github.com/taraksh01/pet-pooja"}
        />
      </div>
    </article>
  );
};

export default Projects;
