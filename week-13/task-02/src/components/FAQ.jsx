import React, { useState } from "react";

function FAQ() {
  return (
    <section className="flex flex-col justify-center items-center my-20">
      <h1 className="font-bold text-4xl">Frequently Asked Questions</h1>
      <p className="max-w-md text-center my-10">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="w-xl flex flex-col gap-4">
        <Expandable
          question={"What is Bookmark?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
          }
        />
        <Expandable
          question={"How can I request a new browser?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
          }
        />
        <Expandable
          question={"Is ther a mobile app?"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
          }
        />
        <Expandable
          question={"What about other Chromium browsers"}
          answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
          }
        />
      </div>
    </section>
  );
}

function Expandable({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group pb-4 flex flex-col justify-between items-center text-gray-500 border-b border-gray-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center w-full  cursor-pointer">
        <p className="group-hover:text-secondary">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className={`transition-all duration-500 ${
            isOpen && "-rotate-180 text-secondary"
          }`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          ></path>
        </svg>
      </div>
      {isOpen && <p className="text-gray-400 pt-4">{answer}</p>}
    </div>
  );
}

export default FAQ;
