import { useEffect, useRef } from "react";

import "./App.css";
import { Home } from "./Components/Home";
import { MediaNav } from "./Components/Nav";
import { MediaFooter } from "./Components/Footer";
import { MediaMovies } from "./Components/MediaMovies";
import { MediaTv } from "./Components/MediaTv";
import { MediaHeader } from "./Components/Header";
import { MediaHero } from "./Components/HeroMovie";
import { TvHero } from "./Components/HeroTv";
import { TrendingMedia } from "./Components/Trending";

function App() {
  const headerMaker = useRef(null);

  return (
    <>
      <div className="nav-and-main-container">
        <MediaNav />
        <div className="main-container">
          <MediaHeader headerRef={headerMaker} />
          <MediaHero />

          <h1>Trending</h1>
          <Home />
          <TrendingMedia />
          <h1>Movies</h1>
          <MediaMovies category="popular" heading="Popular" />
          <MediaMovies category="top_rated" heading="Top Rated" />
          <MediaMovies category="upcoming" heading="Upcoming" />
          <TvHero />
          <h1>TV series</h1>
          <MediaTv category="popular" heading="Popular" />
          <MediaTv category="top_rated" heading="Top Rated" />
          <MediaTv category="on_the_air" heading="On The Air" />
          <MediaFooter headerRef={headerMaker} />
        </div>
      </div>
    </>
  );
}

export default App;
