import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";

import logo from "../../assets/img/logo-ct.png";
const Sidebar = () => {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <Link to="/">
          <img src={logo} className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold">Meraki Desenvolvimento</span>
        </Link>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link  active" to="/">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <FaHome color="#FFF" size={20} />
              </div>
              <span className="nav-link-text ms-1">Página Inicial</span>
            </Link>
          </li>
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
              Conta
            </h6>
          </li>
          <li className="nav-item">
            <Link className="nav-link  " to="/profile">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <FaUser size={20} />
              </div>
              <span className="nav-link-text ms-1">Perfil</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
