import db from "../../db.json";
import MovieSlider from "../MoviesSlider/MovieSlider";
import TopCarousel from "../TopCarousel/TopCarousel";

function MoviesContainer() {
  const topRated = db.filter((el) => el.vote_average >= 8);
  return (
    <div>
      <TopCarousel topMovies={topRated} />
      <MovieSlider movies={db} />
    </div>
  );
}

export default MoviesContainer;
