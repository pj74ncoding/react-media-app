import { useState, useEffect, useRef } from "react";

import { TrendingMovieCard } from "./trendingMovieCard";

export const TrendingMovies = ({ movieTrending }) => {
  const [next, setNext] = useState(0);
  const [innerCarouselPosition, setinnerCarouselPosition] = useState(0);

  const movieNextButton = useRef(null);
  const nextButton = movieNextButton.current;
  const moviePrevButton = useRef(null);
  const prevButton = moviePrevButton.current;

  useEffect(() => {
    const prevButton = moviePrevButton.current;
    prevButton.classList.add("hide-button");

    return () => prevButton.classList.remove("hide-button");
  }, []);

  useEffect(() => {
    const prevButton = moviePrevButton.current;
    const nextButton = movieNextButton.current;
    if (innerCarouselPosition == 0) {
      prevButton.classList.add("hide-button");
    } else if (innerCarouselPosition == 1) {
      prevButton.classList.remove("hide-button");
    } else if (innerCarouselPosition == 2) {
      nextButton.classList.remove("hide-button");
    } else if (innerCarouselPosition == 3) {
      nextButton.classList.add("hide-button");
    }
  }, [innerCarouselPosition]);

  let transFormCarousel = {
    transform: `translateX(-${next}%)`,
  };

  const handleNext = (nextPosition) => {
    if (innerCarouselPosition == 3) {
      return;
    } else {
      setNext((current) => current + nextPosition);
      setinnerCarouselPosition((current) => current + 1);
    }
  };
  const handlePrev = (prevPosition) => {
    if (innerCarouselPosition == 0) {
      return;
    } else {
      setNext((current) => current - prevPosition);
      setinnerCarouselPosition((current) => current - 1);
    }
  };
  return (
    <>
      <h1>Movies Trending</h1>
      <section className="main-carousel-container">
        <div className="carousel-left-chevron-container">
          <button onClick={() => handleNext(25)} ref={movieNextButton}>
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>
          </button>
        </div>
        <div className="trending-carousel">
          <div style={transFormCarousel} className="inner-carousel">
            {movieTrending.map((movieTrend, index) => (
              <TrendingMovieCard
                key={movieTrend.id}
                movieTrend={movieTrend}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="carousel-right-chevron-container">
          <button onClick={() => handlePrev(25)} ref={moviePrevButton}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </section>
    </>
  );
};
