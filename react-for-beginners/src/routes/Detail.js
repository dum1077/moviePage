import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${ id }`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      { loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            title={movie.title_long}
            src={movie.medium_cover_image}
            description={movie.description_full}
            genres={movie.genres}
            url={movie.url}
            rating={movie.rating}
          />
        </div>
      ) }
    </div>
  )
}

export default Detail;