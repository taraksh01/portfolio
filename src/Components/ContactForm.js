import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const validateForm = () => {
    if (name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }
    if (email.length < 3) {
      alert("Email must be at least 3 characters");
      return;
    }
    if (title.length == 0) {
      alert("Please enter a title");
      return;
    }
    if (message.length == 0) {
      alert("Please enter a message");
      return;
    }
  };
  return (
    <form
      className="text-gray-200 mx-auto flex flex-col gap-7 text-xl my-10"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex flex-col sm:flex-row gap-7">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent border-b capitalize p-2 valid:border-green-500 invalid:border-red-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-b p-2 valid:border-green-500 invalid:border-red-500 outline-none"
        />
      </div>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-transparent border-b p-2 capitalize valid:border-green-500 invalid:border-red-500 outline-none"
      />
      <textarea
        name="message"
        placeholder="Your message goes here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-transparent border p-2 capitalize outline-none"
      />

      <button
        onClick={validateForm}
        className="w-fit self-center p-2 rounded-xl cursor-pointer border font-bold"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
