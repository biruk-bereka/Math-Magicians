import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <div className="header">
    <NavLink className="link" to="/"><h2>Math Magicians</h2></NavLink>
    <nav>
      <ul className="navlinks">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              className="link"
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? 'purple' : undefined,
              })}
            >
              {link.text}

            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>

);

export default Navbar;
