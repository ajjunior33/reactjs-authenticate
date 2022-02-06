import { FaBell, FaHome, FaSignOutAlt, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
const Navbar = () => {
  const { signOut } = useAuth();
  async function handleLogout() {
    await signOut();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3">
        <div className="container-fluid">
          <div className="col-auto">
            <div className="bg-white border-radius-lg d-flex me-2">
              <input
                type="text"
                className="form-control border-0 ps-3"
                placeholder="Type here..."
              />
              <button className="btn bg-gradient-primary my-1 me-1">
                Search
              </button>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav navbar-nav-hover ms-auto">
              <div className="row">
                <div className="col-auto m-auto">
                  <a className="text-white cursor-pointer">
                    <FaCogs className="fixed-plugin-button-nav" />
                  </a>
                </div>
                <div className="col-auto m-auto">
                  <div className="dropdown">
                    <a
                      className="text-white cursor-pointer"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaBell />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-right px-2 py-3 ms-n4"
                      aria-labelledby="dropdownMenuButton"
                    >
                      ...
                    </ul>
                  </div>
                </div>
                <div className="col-auto m-auto">
                  <a
                    className="text-white cursor-pointer"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="fixed-plugin-button-nav" />
                    <strong>Sair</strong>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
