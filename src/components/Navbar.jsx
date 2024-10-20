import { NavLink } from "react-router-dom"; 
import IconLinkedin from "./IconLinkedin";
import IconGithub from "./IconGithub";
import IconStack from "./IconStack";

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-5 text-center relative">
      <div className="flex justify-center space-x-4">
        <NavLink
          to="/"
          className="text-black hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-black hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="text-black hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Contact
        </NavLink>
        <NavLink
          to="/projects"
          className="text-black hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Some Projects
        </NavLink>
        <NavLink
          to="/blog"
          className="text-black hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Blog
        </NavLink>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center mt-4 space-x-4">
        {/* Icon LinkedIn */}
        <a
          href="https://www.linkedin.com/in/robert-muñoz-clasing-151bb2128" // Reemplaza con tu URL de LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white flex items-center space-x-1 transform transition-transform duration-200 hover:scale-110"
        >
          <IconLinkedin />
          <span className="text-black text-sm">LinkedIn</span>
        </a>

        {/* Icon GitHub */}
        <a
          href="https://github.com/rocerclasing?tab=repositories" // Reemplaza con tu URL de GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white flex items-center space-x-1 transform transition-transform duration-200 hover:scale-110"
        >
          <IconGithub />
          <span className="text-black text-sm">GitHub</span>
        </a>

        {/* Icon Stack Overflow */}
        <a
          href="https://stackoverflow.com/users/27819268/robertclasing" // Reemplaza con tu URL de Stack Overflow
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white flex items-center space-x-1 transform transition-transform duration-200 hover:scale-110"
        >
          <IconStack />
          <span className="text-black text-sm">Stack Overflow</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
