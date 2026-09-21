export const TrendingMovieCard = ({ movieTrend, index }) => {
  const chartPosition = index + 1;

  return (
    <>
      <div className="trend-card-container">
        <a
          href={`https://www.themoviedb.org/movie/${movieTrend.id}`}
          target="_blank"
        >
          <div className="movie-trend-card-container">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movieTrend.poster_path}`}
              alt={"Movie poster image"}
            />
            {/* <div className="movie-info-container">
            <h2>{movieTrend.original_title}</h2>
            <div className="movie-rating-and-date">
              <div className="star-and-average-container">
                <span className="material-symbols-outlined">star</span>
                <p>{movieTrend.vote_average.toFixed(1)}</p>
              </div>

              <p>{movieTrend.release_date}</p>
            </div>

            <div className="movie-overview">
              <p>{movieTrend.overview}</p>
            </div>
          </div> */}
          </div>
        </a>

        <div className="chart-container">
          <p>{chartPosition}</p>
          <h4>{movieTrend.original_title}</h4>
        </div>
      </div>
    </>
  );
};
