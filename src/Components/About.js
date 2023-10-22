import Skill from "./Skill";

const About = () => {
  return (
    <main className="max-w-screen-xl mx-auto my-10 text-gray-200 flex flex-col font-mono">
      <h2 className="text-3xl md:text-4xl mx-4 md:mx-2 my-3">
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
            <img className="w-96 h-96 hidden md:flex border" src="" alt="" />
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-3xl md:text-4xl">
            <span className="text-orange-400">#</span>skills
          </h2>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-start flex-wrap gap-5 my-10">
            <Skill heading="Languages" fills={["JavaScript", "Python"]} />
            <Skill
              heading="Tools"
              fills={["Linux", "VSCode", "Git", "Github"]}
            />
            <Skill
              heading="Framework/Library"
              fills={["React", "Redux", "tailwind"]}
            />
            <Skill heading="Databases" fills={["MySQL"]} />
            <Skill heading="Others" fills={["HTML", "CSS"]} />
          </div>
        </div>
        {/* <div className="my-10">
          <h2 className="text-3xl md:text-4xl">
            <span className="text-orange-400">#</span>interests
          </h2>
          <div className="flex my-5 lg:w-2/3 flex-wrap gap-4 md:text-lg mx-2">
            <p className="border py-1 px-2">geopolitics</p>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default About;
