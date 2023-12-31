import Skill from "./Skill";
import { skills } from "../skills";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="max-w-screen-xl mx-auto my-10 text-gray-200 flex flex-col font-mono">
      <h2 className="text-3xl mx-4 md:mx-2 my-3">
        <span className="text-orange-400">/</span>about-me
      </h2>
      <p className="mx-4 md:mx-2 sm:text-lg font-semibold">Who am i?</p>
      <div className="mx-6 md:mx-4">
        <div className="flex justify-between items-center my-5">
          <div className="md:w-1/2 my-5 md:my-0">
            <h3 className="font-semibold md:text-lg">Hello, I am Tarak!</h3>
            <p className="my-8 md:text-lg">
              I'm a front-end developer based in Kolkata, India. I can develop
              responsive websites from scratch and raise them into modern
              user-friendly web experiences. Transforming my creativity and
              knowledge into a websites has been my passion for years.
            </p>
          </div>
          <div>
            <img className="w-96 h-96 hidden md:flex" src={""} alt="image" />
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-3xl">
            <span className="text-orange-400">#</span>skills
          </h2>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-start flex-wrap gap-8 my-10">
            {skills?.map((skill, index) => (
              <Skill key={index} heading={skill.heading} fills={skill.fills} />
            ))}
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-3xl">
            <span className="text-orange-400">#</span>Achievements
          </h2>
          <div className="flex my-5 lg:w-2/3 flex-wrap gap-4 md:text-lg mx-2">
            <ul className="ml-8 list-disc">
              <li>
                Solved 180+ Problems on
                <Link
                  to={"https://leetcode.com/taraksh01/"}
                  className="px-2 font-bold text-orange-400 hover:underline"
                >
                  leetcode
                </Link>
              </li>
              <li>
                Conceptual understanding of{" "}
                <span className="font-bold">
                  Data Structures and algorithms
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
