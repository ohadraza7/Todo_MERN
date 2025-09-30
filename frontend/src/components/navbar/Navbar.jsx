import React from "react";
import "./navbar.css";
import { MdOutlineBook } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/index";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      <nav className="container navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand " href="#">
            <b className="d-flex align-items-center">
              <MdOutlineBook />
              Todo
            </b>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/ ">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/todo"
                >
                  Todo
                </Link>
              </li>
              {!isLoggedIn && (
                <>
                  <div>
                    <li className="nav-item mx-2 ">
                      <Link
                        className="nav-link active btn-nav p-2 "
                        aria-current="page"
                        to="/signin"
                      >
                        SignIn
                      </Link>
                    </li>
                  </div>
                  <li className="nav-item mx-2 ">
                    <Link
                      className="nav-link active btn-nav w-100 w-sm-12 my-2 my-sm-0 p-2"
                      aria-current="page"
                      to="/signup"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}

              {isLoggedIn && (
                <li
                  className="nav-item mx-2 "
                  onClick={() => dispatch(authActions.logout())}
                >
                  <Link
                    className="nav-link active btn-nav p-2 "
                    aria-current="page"
                    to="/todo"
                  >
                    Sign Out
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
