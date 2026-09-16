export const TvCard = ({ show }) => {
  return (
    <>
      {" "}
      <a href={`https://www.themoviedb.org/tv/${show.id}`} target="_blank">
        <div className="tv-card-container">
          <img
            className="show-image"
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={""}
          />
          <div className="show-info-container">
            <h2>{show.name}</h2>
            <div className="show-rating-and-date">
              <div class="star-and-average-container">
                <span className="material-symbols-outlined">star</span>
                <p>{show.vote_average.toFixed(1)}</p>
              </div>
              <p>{show.first_air_date}</p>
            </div>

            <div className="show-overview">
              <p>{show.overview}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
