import { Link } from "react-router-dom";
import "./NavigationMenu.scss";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdCreate } from "react-icons/io";
import { MdOutlineSegment } from "react-icons/md";

type pageProp = {
  whichPage: string;
};

const NavigationMenu = ({ whichPage }: pageProp) => {
  let showall = "";
  let home = "";
  let create = "";

  if (whichPage == "showAll") {
    showall = "active";
    home = "";
    create = "";
  } else if (whichPage == "home") {
    home = "active";
    showall = "";
    create = "";
  } else {
    home = "";
    showall = "";
    create = "active";
  }

  return (
    <nav className="navbar">
      <Link to={"/videogame/all"}>
        <p className={`navbar__showall ${showall}`}>
          <MdOutlineSegment />
          <label className="navbar__label">Show All</label>
        </p>
      </Link>

      <Link to={"/videogame"}>
        <p className={`navbar__home ${home}`}>
          <IoHomeOutline />
          <label className="navbar__label">Home</label>
        </p>
      </Link>

      <Link to={"/videogame/create "}>
        <p className={`navbar__create ${create}`}>
          <IoMdCreate />
          <label className="navbar__label">Add Game</label>
        </p>
      </Link>
    </nav>
  );
};

export default NavigationMenu;
