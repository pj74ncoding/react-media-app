export const TrendingTvCard = ({ tvTrend, index }) => {

  const chartPosition = index + 1
  return (
    <>
      <div className="trend-card-container">
        <a href={`https://www.themoviedb.org/tv/${tvTrend.id}`} target="_blank">
          <div className="tv-trend-card-container">
            <img
              className="show-image"
              src={`https://image.tmdb.org/t/p/w500${tvTrend.poster_path}`}
              alt={"Tv show poster image"}
            />
            {/* <div className="show-info-container">
            <h2>{tvTrend.name}</h2>
            <div className="show-rating-and-date">
              <div className="star-and-average-container">
                <span className="material-symbols-outlined">star</span>
                <p>{tvTrend.vote_average.toFixed(1)}</p>
              </div>
              <p>{tvTrend.first_air_date}</p>
            </div>

            <div className="show-overview">
              <p>{tvTrend.overview}</p>
            </div>
          </div> */}
          </div>
        </a>
        <div className="chart-container">
          <p>{chartPosition}</p>
          <h4>{tvTrend.name}</h4>
        </div>
      </div>
    </>
  );
};
