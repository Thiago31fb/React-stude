import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p>nosaso Rodape</p>
    </footer>
  );
};

export default Footer;
