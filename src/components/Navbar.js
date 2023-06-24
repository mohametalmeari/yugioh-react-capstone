import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'MainPage' },
  { path: 'page-one', text: 'PageOne' },
];

const Navbar = () => (
  <nav>
    <h1>
      <NavLink to="/">
        Website Logo
      </NavLink>
    </h1>
    <ul className="menu">
      {links.map((link) => (
        <li className="page-link" key={link.text}>
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
