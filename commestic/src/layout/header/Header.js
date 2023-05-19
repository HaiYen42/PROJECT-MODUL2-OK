import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'
import {ShoppingCartOutlined } from '@ant-design/icons';


export default function Header() {
  const [user,setUser] = useState();
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  const handleLogOut = () => {
      setUser(localStorage.removeItem("user"));
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  },[])
  
  let element = "";
  if (user) {
    element = (
      <>
        <li>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle bg-light text-dark border-light display-1"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {user.name}
            </button>
            <div class="dropdown-menu dropdown-menu-right"  aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item text-dark " href="#" >
                Thông tin tài khoản
              </a>
              <div onClick={handleLogOut} class="dropdown-item text-dark" href="#" >
                Đăng xuất
              </div>
            </div>
          </div>
        </li>
      </>
    );
  } else {
    element = (
      <>
        <li>
          <NavLink to={"/login"}>
            <img src="images/user-icon.png" className="loginIcon"/>
          </NavLink>
        </li>
      </>
    );
  }
  return (
    <div>
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-light bg-light justify-content-between">
            <div id="mySidenav" className="sidenav">
              <a
                href="#"
                className="closebtn"
                onClick={closeNav}
              >
              < AiOutlineClose size={25}/>
              </a>
              <NavLink to={"/"} onClick={closeNav}>
                Home
              </NavLink>
              <NavLink to={"/product"} onClick={closeNav}>
                Products
              </NavLink>
              <NavLink to={"/about"} onClick={closeNav}>
                About
              </NavLink>
              <NavLink to={"/client"} onClick={closeNav}>
                Client
              </NavLink>
              <NavLink to={"/contact"} onClick={closeNav}>
                Contact
              </NavLink>
            </div>
            <span className="toggle_icon" onClick={openNav}>
              <img src="images/toggle-icon.png" />
            </span>
            <h1 style={{fontWeight: "bolder", fontSize: 30, color:"#335c67", fontFamily:"inherit" }}>BEAUTY FLOWER</h1>
            <form className="form-inline ">
              <div className="login_text">
                <ul>
               
                  <li>
                    <NavLink to={"/cart"}>
                    <ShoppingCartOutlined className="shopCart"/>
                    </NavLink>
                  </li>
                  {/* <li>
                    <a href="#">
                      <img src="images/search-icon.png" />
                    </a>
                  </li> */}
                  {element}
                </ul>
              </div>
            </form>
          </nav>
        </div>
      </div>
      {/* header section end */}
    </div>
  );
}
