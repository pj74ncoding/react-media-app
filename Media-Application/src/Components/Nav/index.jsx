import { useEffect, useRef } from "react";

export const MediaNav = () => {
  // const navIconsContainer = useRef(null);
  // const navDescriptionContainer = useRef(null);

  // useEffect(() => {
  //   const iconsEl = navIconsContainer.current;
  //   const descEl = navDescriptionContainer.current;

  //   if (!iconsEl || !descEl) return;

  //   const handleEnter = () => {
  //     descEl.classList.add("view-descriptions");
  //   };
  //   const handleLeave = () => {
  //     descEl.classList.remove("view-descriptions");
  //   };

  //   iconsEl.addEventListener("mouseenter", handleEnter);
  //   descEl.addEventListener("mouseleave", handleLeave);

  //   return () => {
  //     iconsEl.removeEventListener("mouseenter", handleEnter);
  //     descEl.removeEventListener("mouseleave", handleLeave);
  //   };
  // }, []);

  const navIconsContainer = useRef(null);
  const navDescriptionContainer = useRef(null);

  useEffect(() => {
    const iconsContainer = navIconsContainer.current;
    const descriptionsContainer = navDescriptionContainer.current;

    const handleEnter = () => {
      descriptionsContainer.classList.add("view-descriptions");
    };

    const handleLeave = () => {
      descriptionsContainer.classList.remove("view-descriptions");
    };
    iconsContainer.addEventListener("mouseenter", handleEnter);
    descriptionsContainer.addEventListener("mouseleave", handleLeave);

    return () => {
      iconsContainer.removeEventListener("mouseenter", handleEnter);
      descriptionsContainer.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <nav className="main-nav-container">
        <section className="nav-icons-container" ref={navIconsContainer}>
          <div className="icon-container">
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="icon-container">
            <span className="material-symbols-outlined">home</span>
          </div>
          <div className="icon-container">
            <span className="material-symbols-outlined">library_add</span>
          </div>
          <div className="film-icon-container">
            <i className="fa-solid fa-film fa-sm"></i>
          </div>
          <div className="icon-container">
            <span className="material-symbols-outlined">tv_gen</span>
          </div>
          <div className="icon-container">
            <span className="material-symbols-outlined">star</span>
          </div>
          <div className="icon-container">
            <span className="material-symbols-outlined">settings</span>
          </div>
        </section>

        <section
          className="nav-descriptions-container"
          ref={navDescriptionContainer}
        >
          <div className="description-container">
            <p>Search</p>
          </div>
          <div className="description-container">
            <p>Home</p>
          </div>
          <div className="description-container">
            <p>WishList</p>
          </div>
          <div className="description-container">
            <p>Movies</p>
          </div>
          <div className="description-container">
            <p>TV Series</p>
          </div>
          <div className="description-container">
            <p>Favourites</p>
          </div>
          <div className="description-container">
            <p>Settings</p>
          </div>
        </section>
      </nav>
    </>
  );
};
