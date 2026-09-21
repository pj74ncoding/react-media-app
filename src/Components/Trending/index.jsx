import { useState, useEffect } from "react";
import { TrendingMovies } from "./trendingMovie";
import { TrendingTv } from "./trendingTv";

export const TrendingMedia = () => {
  const [movieTrending, setMovieTrending] = useState([]);
  const [tvTrending, setTvTrending] = useState([]);

  const fetchTrendingMovies = async () => {
    try {
      const moviesResponse = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const movieResults = await moviesResponse.json();
      setMovieTrending(movieResults.results);
    } catch (error) {
      console.warn("fetchTrendingMovies error is: ", error);
    }
  };

  const fetchTrendingTv = async () => {
    try {
      const tvResponse = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const tvResults = await tvResponse.json();
      setTvTrending(tvResults.results);
    } catch (error) {
      console.warn("fetchTrendingTv error is: ", error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchTrendingTv();
  }, []);

  useEffect(() => {
    console.log("movieTrending", movieTrending);
    console.log("tvTrending", tvTrending);
  }, [movieTrending, tvTrending]);

  return (
    <>
      <TrendingMovies movieTrending={movieTrending} />
      <TrendingTv tvTrending={tvTrending} />
    </>
  );
};
