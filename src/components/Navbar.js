import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'MainPage' },
  { path: 'details-page', text: 'PageOne' },
];

const Navbar = () => (
  <nav>
    <h1>
      <NavLink to="/">
        Website Logo
      </NavLink>
    </h1>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
