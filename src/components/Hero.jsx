import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex items-center w-full mb-10 pt-3">
        <a
          href="https://github.com/Julian-Hart/summarize_ai"
          target="_blank"
          className="black_btn"
        >
          GitHub
        </a>
      </nav>

      <h1 className="head_text">
        {" "}
        Summarize Articles with <br />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Transform lengthy articles into clear and bite sized summaries using the
        power of AI
      </h2>
    </header>
  );
};

export default Hero;
