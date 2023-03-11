import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Loading from "../components/Loading";
import styles from "./routes.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8`)
    ).json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.body}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
