import { Link, NavLink } from "react-router-dom";
// import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
            <br />
          </li>
          <li>
            <NavLink to={"/booking"}>Booking Dokter</NavLink>
            <br />
          </li>
          <li>
            <NavLink to={"/article"}>News</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
