import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

export default function Socials() {
  const cardShadow = {
    boxShadow: `
      rgba(200, 200, 200, 0.2) 2px 2px 6px,
      rgba(160, 160, 160, 0.15) 0px 6px 10px
    `,
  };

  const hoverClass = "hover:brightness-125";

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
      <a
        href="https://github.com/kaladharb"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3.5 sm:p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] ${hoverClass}`}
        style={cardShadow}
      >
        <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <a
        href="https://www.linkedin.com/in/kaladharbandari"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3.5 sm:p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] ${hoverClass}`}
        style={cardShadow}
      >
        <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <a
        href="https://leetcode.com/u/kaladharbandari/"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3.5 sm:p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] ${hoverClass}`}
        style={cardShadow}
      >
        <SiLeetcode className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <a
        href="https://www.codechef.com/users/kaladhar_25"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3.5 sm:p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] ${hoverClass}`}
        style={cardShadow}
      >
        <SiCodechef className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <a
        href="https://www.hackerrank.com/profile/Kaladharbandari"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3.5 sm:p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] ${hoverClass}`}
        style={cardShadow}
      >
        <SiHackerrank className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}
