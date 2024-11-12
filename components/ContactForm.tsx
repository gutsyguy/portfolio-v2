import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleMessageChange = (e: any) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
  };

  const handleEmailChange = (e: any) => {
    let inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleNameChange = (e: any) => {
    let inputValue = e.target.value;
    setName(inputValue);
  };

  const sendEmail = async (e: any) => {
    let data = {
      name,
      email,
      message,
    };
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setEmail("");
        setMessage("");
        setMessage("");
      } else {
        setEmail("");
        setMessage("");
        setMessage("");
        console.log("Response failed");
        console.log(JSON.stringify(data));
      }
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex justify-center text-[1rem] py-[2rem] pb-[4rem]"
      data-te-animation-init
      data-te-animation-start="onScroll"
      data-te-animation-on-scroll="repeat"
      data-te-animation-show-on-load="false"
      data-te-animation="[slide-right_1s_ease-in-out]"
      data-aos="fade-up"
    >
      <form
        className="border-2 border-solid  px-[5rem] rounded-xl bg-blue-400"
        onSubmit={sendEmail}
      >
        <h1 className="text-[3rem]">Contact Me</h1>
        <div className="w-full flex flex-col my-4">
          <label htmlFor="name" className="font-bold text-white">
            Name
          </label>
          <input
            className=" border-2 text-black border-solid rounded-md"
            minLength={3}
            maxLength={150}
            value={name}
            onChange={handleNameChange}
            required
            type="text"
            placeholder="Enter name"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="w-full flex flex-col my-4">
          <label htmlFor="email" className="font-bold text-white">
            Email
          </label>
          <input
            className=" text-black border-2 border-solid rounded-md"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="w-full flex flex-col my-4">
          <label htmlFor="name" className="font-bold text-white">
            Subject
          </label>
          <input
            className=" border-2 text-black border-solid rounded-md"
            minLength={3}
            maxLength={150}
            value={name}
            onChange={handleNameChange}
            required
            type="text"
            placeholder="Enter name"
            autoComplete="off"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-bold text-white">
            Message
          </label>
          <textarea
            name="message"
            rows={2}
            required
            minLength={10}
            maxLength={150}
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            className="w-full p-4 bg-gray-50 border border-[#] rounded-md text-black"
          ></textarea>
        </div>
        <button
          className="text-white py-2 mt-[2rem] bg-gray-700 font-medium rounded-md mb-4 px-[5rem] border-[#D8A206] border-2 border-solid"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
