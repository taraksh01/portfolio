const Projects = () => {
  return (
    <article className="max-w-screen-xl mx-auto text-white font-mono">
      <div className="flex justify-between">
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
    </article>
  );
};

export default Projects;
