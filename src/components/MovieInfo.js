import styles from "./com.module.css";

function MovieInfo({ title, rating, desc, genres }) {
  return (
    <div className={styles.info_container}>
      <h2>{title}</h2>
      <h3>Rating : {rating}</h3>
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
      <br></br>
      <h3>Description</h3>
      <p>{desc}</p>
    </div>
  );
}

export default MovieInfo;
