import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      email,
      subject,
      message,
    };

    console.log("Sending data:", data);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      console.log("Email sent successfully");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      console.error("Failed to send email");
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-black ">
      <form
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white border-black dark:bg-gray-700 border-2 dark:border-gray-600 shadow-lg rounded-xl p-6"
      >
        <h1 className="text-xl font-bold text-center mb-4 dark:text-white">
          Contact Me
        </h1>
        {[
          { label: "Name", value: name, onChange: setName, type: "text" },
          { label: "Email", value: email, onChange: setEmail, type: "email" },
          {
            label: "Subject",
            value: subject,
            onChange: setSubject,
            type: "text",
          },
        ].map(({ label, value, onChange, type }, idx) => (
          <div key={idx} className="mb-4">
            <label
              htmlFor={label}
              className="block mb-2 text-gray-700 dark:text-white"
            >
              {label}
            </label>
            <input
              id={label}
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        ))}
        <div className="mb-4">
          <label
            htmlFor="Message"
            className="block mb-2 text-gray-700 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-red-400 dark:bg-blue-800 text-white rounded hover:dark:bg-blue-900 hover:bg-red-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
