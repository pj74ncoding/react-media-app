import { useState, useRef, useEffect } from "react";

import { TrendingTvCard } from "./trendingTvCard";

export const TrendingTv = ({ tvTrending }) => {
  const [next, setNext] = useState(0);
  const [innerCarouselPosition, setinnerCarouselPosition] = useState(0);

  const tvNextButton = useRef(null);
  const nextButton = tvNextButton.current;
  const tvPrevButton = useRef(null);
  const prevButton = tvPrevButton.current;

  useEffect(() => {
    const prevButton = tvPrevButton.current;
    prevButton.classList.add("hide-button");

    return () => prevButton.classList.remove("hide-button");
  }, []);

  useEffect(() => {
    const prevButton = tvPrevButton.current;
    const nextButton = tvNextButton.current;
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
      <h1>TV Trending</h1>
      <section className="main-carousel-container">
        <div className="carousel-left-chevron-container">
          <button onClick={() => handleNext(25)} ref={tvNextButton}>
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>
          </button>
        </div>
        <div className="trending-carousel">
          <div style={transFormCarousel} className="inner-carousel">
            {tvTrending.map((tvTrend, index) => (
              <TrendingTvCard
                key={tvTrend.id}
                tvTrend={tvTrend}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="carousel-right-chevron-container">
          <button onClick={() => handlePrev(25)} ref={tvPrevButton}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </section>
    </>
  );
};
