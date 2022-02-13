import "./Footer.css";
import React from "react";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import KingRoad from "../../img/KingRoad.png";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-nav">
        <HandymanRoundedIcon className="nav-img nav-svg" />
        <img
          src={KingRoad}
          alt="Kings Road logo"
          className="nav-img nav-logo"
        ></img>
        <PeopleAltIcon className="nav-img nav-svg" />
      </div>
    </footer>
  );
}

export default Footer;
