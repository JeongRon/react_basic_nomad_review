import { Link } from "react-router-dom";
import styles from "./com.module.css";

function Movie({ id, coverImg, title }) {
  return (
    <Link to={`/movie/${id}`}>
      <img className={styles.img} src={coverImg} alt={title} />
    </Link>
  );
}

export default Movie;
