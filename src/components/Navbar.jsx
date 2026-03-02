import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "bottom top",
      onEnter: () => document.querySelector("nav").classList.add("scrolled"),
      onLeaveBack: () =>
        document.querySelector("nav").classList.remove("scrolled"),
    });
  });

  return (
    <nav>
      <div className="container px-5 flex items-center justify-center md:justify-between">
        <a href="#home" className="text-2xl md:text-3xl font-bold">
          FIGHT-GYM
        </a>

        <ul className="hidden md:flex text-lg font-semibold gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
