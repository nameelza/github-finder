import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <div>
      <h1>Github Finder</h1>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
