import styles from "./com.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" className={styles.link}>
      <div className={styles.header}>MOVIE INFORMATION</div>
    </Link>
  );
}
export default Header;
