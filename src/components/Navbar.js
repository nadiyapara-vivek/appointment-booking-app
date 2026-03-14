import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar-custom">
      <Link className="navbar-brand-custom" to="/">
        <span className="brand-dot" />
        MediBook
      </Link>

      <div className="navbar-links">
        <Link
          className={`nav-link-custom ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`nav-link-custom ${location.pathname === "/book" ? "active" : ""}`}
          to="/book"
        >
          Book
        </Link>
        <Link
          className={`nav-link-custom ${location.pathname === "/appointments" ? "active" : ""}`}
          to="/appointments"
        >
          My Appointments
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;