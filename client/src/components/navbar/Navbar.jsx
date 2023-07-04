import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar_main ">
        <div className="container">
          <Link className="nav_brand_parent" to={"/"}>
            <span className="nav_brand_name">YAAD</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item home">
                <Link to={"/"}>Home</Link>
                <div
                  className={
                    "" + (location.pathname === "/" ? "active-link" : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to={"/?cat=art"}>Art</Link>
                <div
                  className={
                    "" +
                    (location.pathname.includes("art") ? "active-link" : "")
                  }
                ></div>
              </li>
              <li className="nav-item home">
                <Link to={"/?cat=science"}>Science</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/?cat=science" ? "active-link" : "")
                  }
                ></div>
              </li>
              <li className="nav-item home">
                <Link to={"/?cat=technology"}>Tech</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/?cat=technology"
                      ? "active-link"
                      : "")
                  }
                ></div>
              </li>
              <li className="nav-item home">
                <Link to={"/?cat=cinema"}>Cinema</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/?cat=cinema" ? "active-link" : "")
                  }
                ></div>
              </li>
              <li className="nav-item home">
                <Link to={"/?cat=design"}>Design</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/?cat=design" ? "active-link" : "")
                  }
                ></div>
              </li>
              <li className="nav-item home">
                <Link to={"/?cat=food"}>Food</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/?cat=food" ? "active-link" : "")
                  }
                ></div>
              </li>
            </ul>
            <div className="nav-buttons">
              {Cookies.get("token") ? (
                <>
                  <div className="nav-item home">
                    <Button
                      size="sm"
                      variant="outlined"
                      className=" nav_signin_btn"
                    >
                      Write
                    </Button>
                  </div>
                  <div className="nav-item home">
                    <Button size="sm" className=" nav_signup_btn">
                      Logout
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="nav-item home">
                    <Button
                      size="sm"
                      variant="outlined"
                      className=" nav_signin_btn"
                    >
                      Sign in
                    </Button>
                  </div>
                  <div className="nav-item home">
                    <Button size="sm" className=" nav_signup_btn">
                      Sign up
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
