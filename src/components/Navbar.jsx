import { NavLink } from "react-router";


function Navbar({ cartCount }) {

  return (
    <header className="navbar">

      <NavLink
        to="/"
        className="logo"
      >
        Mimo's Bite
      </NavLink>


      <nav>

        <NavLink
          to="/"
          end
        >
          Home
        </NavLink>


        <NavLink to="/about">
          About
        </NavLink>


        <NavLink to="/menu">
          Menu
        </NavLink>


        <NavLink to="/gallery">
          Gallery
        </NavLink>


        <NavLink to="/contact">
          Contact
        </NavLink>


        <NavLink
          to="/cart"
          className="nav-cart"
        >
          🛒

          <span>
            {cartCount}
          </span>

        </NavLink>

      </nav>

    </header>
  );
}


export default Navbar;