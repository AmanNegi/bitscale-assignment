import React from "react";
import { IconType } from "react-icons";
import { FaEye, FaGithub, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const githubUrl = "https://www.github.com/amannegi/bitscale-assignment";
  const personalUrl = "https://www.amannegi.in";

  const navigateToLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-card">
      <h1 className="text-4xl font-bold mb-4 text-headingText">
        Assignment BitScale.ai!
      </h1>
      <p className="text-lg mb-8 text-bodyText w-[60%] mx-auto">
        This assignment was quite easy and fun to work on. To me minor details,
        in the interface and code matters a lot, I hope that shows up in my
        work. I hope you like it! Here are a few things, I'd like to highlight:
        <ul className="list-disc list-inside">
          <li className="mt-4">TypeSafe code with types where required</li>
          <li>CSS Variables to ensure consistency and reusability in design</li>
          <li>
            Follows Clean Architecture, increasing testability and scalability
          </li>
          <li>
            Dark mode, primarily for developers {"(I can't stand Light Mode)"}
          </li>
          <li>
            Well-documented codebase, with comments and proper naming
            conventions
          </li>
          <li>
            Utilizes Tailwind CSS and Framer Motion for a user-friendly UI
          </li>
        </ul>
      </p>

      <button
        onClick={() => navigate("/pricing")}
        className="mb-4 actionButton"
      >
        <FaEye className="inline-block mr-2" />
        View Assignment UI
      </button>

      <div className="flex flex-row gap-4">
        <button
          onClick={() => navigateToLink(githubUrl)}
          className="actionButton"
        >
          <FaGithub className="inline-block mr-2" />
          View Source Code
        </button>

        <button
          onClick={() => navigateToLink(personalUrl)}
          className="actionButton"
        >
          <FaInfoCircle className="inline-block mr-2" />
          Learn more about me!
        </button>
      </div>
    </div>
  );
};

export default Home;
