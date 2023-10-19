import Project from "./SingleProject";

const Home = () => {
  return (
    <main className="max-w-screen-xl mx-auto text-white flex flex-col font-mono">
      <article className="flex justify-between items-center">
        <div className="w-5/12">
          <h1 className="text-4xl">
            Tarak is a{" "}
            <span className="text-orange-400">front-end developer</span>
          </h1>
          <p className="my-8">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="border rounded-sm p-2 border-orange-400 font-semibold">
            Contact me!!
          </button>
        </div>
        <div className="flex flex-col my-10 items-center">
          <img className="h-96 w-96" alt="Image" src="" />
          <p className="font-semibold text-lg border border-white my-1 p-1 rounded-sm">
            🟠 Currently working of portfolio
          </p>
        </div>
      </article>
      <article className="my-10 text-white font-mono">
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
    </main>
  );
};

export default Home;
