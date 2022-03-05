import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-stickey">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/technology">
                    Technology
                  </Link>
                </li>

                {/* <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link active" href="/business">Business</a></li>
          <li className="nav-item"><a className="nav-link active" href="/entertainment">Entertainment</a></li>
          <li className="nav-item"><a className="nav-link active" href="/general">General</a></li>
          <li className="nav-item"><a className="nav-link active" href="/health">Health</a></li>
          <li className="nav-item"><a className="nav-link active" href="/science">Science</a></li>
          <li className="nav-item"><a className="nav-link active" href="/sports">Sports</a></li>
          <li className="nav-item"><a className="nav-link active" href="/technology">Technology</a></li>  */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );  
}

export default Navbar;
