import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li  className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li  className={styles.item}>
          <Link to="/Users">Users</Link>
        </li>
        <li  className={styles.item}>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
