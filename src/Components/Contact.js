import { Link } from "react-router-dom";
import { IoMailUnreadOutline } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <main className="max-w-screen-xl mx-auto my-10 text-gray-200 flex flex-col font-mono">
      <h2 className="text-3xl md:text-4xl mx-4 md:mx-2 my-3">
        <span className="text-orange-400">/</span>contacts
      </h2>
      <p className="mx-4 md:mx-2 sm:text-lg font-semibold">Who am i?</p>
      <div className="mx-6 md:mx-4">
        <div className="my-5 flex flex-col md:flex-row justify-between items-center">
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
      </div>
      <ContactForm />
    </main>
  );
};

export default Contact;
