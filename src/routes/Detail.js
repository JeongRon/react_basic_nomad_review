import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MovieInfo from "../components/MovieInfo";
import Loading from "../components/Loading";
import styles from "./routes.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
      setLoading(false);
    };
    getDetail();
  }, [id]);
  return (
    <div className={styles.body}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className={styles.detail_container}>
            <div className={styles.detail_container_left}>
              <img
                src={detail.large_cover_image}
                alt={detail.title}
                className={styles.detail_img}
              />
            </div>
            <div className={styles.detail_container_right}>
              <MovieInfo
                title={detail.title}
                rating={detail.rating}
                desc={detail.description_full}
                genres={detail.genres}
              />
            </div>
            {console.log(detail)}
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
