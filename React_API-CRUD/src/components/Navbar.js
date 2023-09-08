import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-info rounded-pill px-3">
      <div className="container-fluid">
      <Link className="navbar-brand text-dark" to="/">Products</Link>
        <Link className="navbar-brand ms-auto" to="/stuff">
          <img src="/1.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;