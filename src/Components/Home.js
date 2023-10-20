import Project from "./SingleProject";
import Skill from "./Skill";
import { IoMailUnreadOutline } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";

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
      <article className="my-10 text-white font-mono">
        <div className="flex items-center w-2/3">
          <h2 className="text-4xl">
            <span className="text-orange-400">#</span>skills
          </h2>
          <div className="w-1/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
        </div>
        <div className="flex items-baseline justify-end w-3/5 ml-auto flex-wrap gap-y-5 gap-x-5 my-10">
          <Skill heading="Others" fills={["HTML", "CSS"]} />
          <Skill heading="Databases" fills={["MySQL"]} />
          <Skill
            heading="Framework/Library"
            fills={["React", "Redux", "tailwind"]}
          />
          <Skill heading="Languages" fills={["JavaScript", "Python"]} />
          <Skill heading="Tools" fills={["Linux", "VSCode", "Git", "Github"]} />
        </div>
      </article>
      <article className="my-10 text-white font-mono">
        <div className="flex items-center w-2/3">
          <h2 className="text-4xl">
            <span className="text-orange-400">#</span>about-me
          </h2>
          <div className="w-2/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h2 className="text-lg">Hello, I am Tarak!</h2>
            <p className="my-12">
              I'm a front-end developer based in Kolkata, India. I can develop
              responsive websites from scratch and raise them into modern
              user-friendly web experiences. Transforming my creativity and
              knowledge into a websites has been my passion for years.
            </p>
            <button className="border border-orange-400 p-2 rounded-md text-xl">
              Read more {"-->"}
            </button>
          </div>
          <div>
            <img className="w-96 h-96" src="" alt="" />
          </div>
        </div>
      </article>
      <article className="my-10 text-white font-mono">
        <div className="flex items-center w-2/3">
          <h2 className="text-4xl">
            <span className="text-orange-400">#</span>contact
          </h2>
          <div className="w-1/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg w-1/2 my-20">
            I am looking for an job opportunities in frontend development. If
            you are interested in getting started please contact me.
          </p>
          <div className="flex gap-3 flex-col">
            <p className="text-lg font-medium">Message me here</p>
            <div className="flex  gap-3 items-end">
              <ImLinkedin2 className="text-orange-400 text-4xl" />
              <p>@taraksh01</p>
            </div>
            <div className="flex gap-3 items-center">
              <IoMailUnreadOutline className="text-orange-400 text-4xl" />
              <p>taraksh01@gmail.com</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
