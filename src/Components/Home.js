import Project from "./SingleProject";
import Skill from "./Skill";
import { IoMailUnreadOutline } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { projects } from "../projects";

const Home = () => {
  return (
    <main className="max-w-screen-xl mx-auto text-gray-200 flex flex-col font-mono">
      <article className="flex flex-col md:flex-row m-2 my-5 justify-between md:items-center">
        <div className="md:w-5/12 mx-2">
          <h1 className="text-2xl md:text-3xl">
            Tarak is a{" "}
            <span className="text-orange-400">front-end developer</span>
          </h1>
          <p className="my-8">
            He crafts responsive websites where technologies meet creativity
          </p>
          <Link
            to={"/contact"}
            className="border rounded-sm p-2 border-orange-400 font-semibold"
          >
            Contact me!!
          </Link>
        </div>
        <div className="flex flex-col items-center my-8">
          <img className="h-96 w-96" alt="Image" src={""} />
          <p className="font-semibold border border-white my-1 p-1 rounded-sm">
            🟠 Currently working of portfolio
          </p>
        </div>
      </article>
      <article className="m-2">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center md:w-2/3">
            <h2 className="text-2xl md:text-3xl">
              <span className="text-orange-400">#</span>projects
            </h2>
            <div className="invisible md:visible w-2/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
          </div>
          <Link to={"/projects"} className="text-lg">
            <span className="hidden sm:flex">all works {"->"}</span>
            <span className="sm:hidden mr-4">more{"->"}</span>
          </Link>
        </div>
        <div className="sm:mx-4 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-6 sm:justify-start lg:justify-evenly">
          {projects?.map((project) => (
            <Project
              key={project?.projectName}
              tech={project?.techStack}
              name={project?.projectName}
              desc={project?.description}
              live={project?.live}
              code={project?.code}
              image={project?.image}
            />
          ))}
        </div>
      </article>
      <article className="m-2 xl:m-0 xl:my-10">
        <div className="flex items-center w-2/3">
          <h2 className="text-2xl md:text-3xl">
            <span className="text-orange-400">#</span>skills
          </h2>
          <div className="w-1/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-end md:w-4/5 lg:w-3/5 sm:ml-auto sm:flex-wrap gap-5 my-10">
          <Skill heading="Languages" fills={["JavaScript", "Python"]} />
          <Skill heading="Tools" fills={["Linux", "VSCode", "Git", "Github"]} />
          <Skill
            heading="Framework/Library"
            fills={["React", "Redux", "tailwind"]}
          />
          <Skill heading="Databases" fills={["MySQL"]} />
          <Skill heading="Others" fills={["HTML", "CSS"]} />
        </div>
      </article>
      <article className="m-2">
        <div className="flex items-center md:w-2/3">
          <h2 className="text-2xl md:text-3xl">
            <span className="text-orange-400">#</span>about
          </h2>
          <div className="hidden md:flex md:w-1/2 lg:w-2/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
        </div>
        <div className="mx-4 my-5 flex justify-between items-center">
          <div className="md:w-1/2 my-5 md:my-0">
            <h2 className="font-semibold md:text-lg">Hello, I am Tarak!</h2>
            <p className="my-8 md:text-lg">
              I'm a front-end developer based in Kolkata, India. I can develop
              responsive websites from scratch and raise them into modern
              user-friendly web experiences. Transforming my creativity and
              knowledge into a websites has been my passion for years.
            </p>
            <Link
              to={"/about"}
              className="border border-orange-400 p-2 rounded-md text-lg font-medium"
            >
              Read more {"->"}
            </Link>
          </div>
          <div>
            <img className="w-96 h-96 hidden md:flex border" src="" alt="" />
          </div>
        </div>
      </article>
      <article className="m-2">
        <div className="flex items-center w-2/3">
          <h2 className="text-2xl md:text-3xl">
            <span className="text-orange-400">#</span>contact
          </h2>
          <div className="w-1/3 h-px mx-5 bg-orange-400 flex-shrink-0"></div>
        </div>
        <div className="mx-4 my-5 flex flex-col sm:flex-row justify-between items-center">
          <p className="md:text-lg sm:w-1/2 my-10 md:my-20">
            I am looking for a job opportunities in frontend development. If you
            are interested in getting started please contact me.
          </p>
          <div className="flex justify-center place-self-start sm:place-self-center gap-3 flex-col">
            <p className="text-lg font-semibold">Message me here</p>
            <Link
              to={"https://www.linkedin.com/in/taraksh01/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-end"
            >
              <ImLinkedin2 className="text-orange-400 text-4xl" />
              <p>@taraksh01</p>
            </Link>
            <Link
              to={"mailto:taraksh01@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center"
            >
              <IoMailUnreadOutline className="text-orange-400 text-4xl" />
              <p>taraksh01@gmail.com</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
