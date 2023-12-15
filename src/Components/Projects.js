import Project from "./SingleProject";

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
            <span className="text-orange-400">#</span>complete-apps
          </h2>
        </div>
        <div className="sm:mx-4 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-6 sm:justify-start">
          <Project
            tech={["React", "tailwind", "parcel"]}
            name={"project 1"}
            desc={"This is a short description for project"}
            live={"https://github.com/taraksh01/pet-pooja"}
            code={"https://github.com/taraksh01/pet-pooja"}
          />
          <Project
            tech={["React", "tailwind", "parcel"]}
            name={"project 1"}
            desc={"This is a short description for project"}
            live={"https://github.com/taraksh01/pet-pooja"}
            code={"https://github.com/taraksh01/pet-pooja"}
          />
        </div>
      </div>
      <div className="mx-4 md:mx-2">
        <div className="my-10">
          <h2 className="text-2xl md:text-3xl">
            <span className="text-orange-400">#</span>in-progress
          </h2>
        </div>
        <div className="sm:mx-4 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-6 sm:justify-start">
          {/* <Project
            tech={["React", "tailwind", "parcel"]}
            name={"project 1"}
            desc={"This is a short description for project"}
            live={"https://github.com/taraksh01/pet-pooja"}
            code={"https://github.com/taraksh01/pet-pooja"}
          /> */}
        </div>
      </div>
      <div className="mx-4 md:mx-2">
        <div className="my-10">
          <h2 className="text-2xl md:text-3xl">
            <span className="text-orange-400">#</span>mini-projects
          </h2>
        </div>
        <div className="sm:mx-4 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-6 sm:justify-start">
          {/* <Project
            tech={["React", "tailwind", "parcel"]}
            name={"project 1"}
            desc={"This is a short description for project"}
            live={"https://github.com/taraksh01/pet-pooja"}
            code={"https://github.com/taraksh01/pet-pooja"}
          /> */}
        </div>
      </div>
    </main>
  );
};

export default Projects;
