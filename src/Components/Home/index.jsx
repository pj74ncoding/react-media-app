import { useState, useEffect, useMemo } from "react";
import { HomeCard } from "./homeCard.jsx";
export const Home = () => {
  const [movieHero, setMovieHero] = useState([]);
  const [tvHero, setTvHero] = useState([]);
  const [mixedHeroArray, setMixedHeroArray] = useState([]);

  const fetchHomeMovieData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const responseData = await response.json();
      setMovieHero(responseData.results);
    } catch (error) {
      console.warn("The fetchHomeMovieData error is:", error);
    }
  };

  const fetchHomeTvData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const responseData = await response.json();
      setTvHero(responseData.results);
    } catch (error) {
      console.warn("The fetchHomeTvData error is:", error);
    }
  };

  useEffect(() => {
    fetchHomeMovieData();
    fetchHomeTvData();
  }, []);

  useEffect(() => {
    console.log("movieHeroHome", movieHero, "tvHeroHome", tvHero);
  }, [movieHero, tvHero]);

  const slicedMovie = useMemo(() => movieHero.slice(0, 5), [movieHero]);
  const slicedTv = useMemo(() => tvHero.slice(0, 5), [tvHero]);

  useEffect(() => {
    setMixedHeroArray([...slicedMovie, ...slicedTv]);
  }, [slicedMovie, slicedTv]);

  useEffect(() => {
    console.log("setMixedHeroArray", mixedHeroArray);
  }, [mixedHeroArray]);
  return (
    <>
      <section class="home-hero-section">
        {mixedHeroArray.map((media) => (
          <HomeCard key={media.id} homeData={media} />
        ))}
      </section>
    </>
  );
};
