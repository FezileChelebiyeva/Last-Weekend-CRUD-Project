import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "./index.scss";
import logo from "../../assets/images/logo.png.webp";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <header>
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink>Courses</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="0">
                        <Link>Blog</Link>
                      </Menu.Item>
                      <Menu.Item key="1">
                        <Link>Blog Details</Link>
                      </Menu.Item>
                      <Menu.Item key="1">
                        <Link>Element</Link>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Blog
                  </a>
                </Dropdown>
              </li>
              <li>
                <NavLink>Contact</NavLink>
              </li>
            </ul>
            <div className="btn">
              <button className="joinBtn">Join</button>
              <button className="loginBtn">Log In</button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
