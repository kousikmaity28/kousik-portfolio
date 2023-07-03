import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import flogo from "../assets/flogo.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={flogo}
          alt="Founder"
        />

        <h2>Kousik Maity</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/kousik-maity-458471219/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/kousikmaity28" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;