import { useEffect, useRef } from "react";
import foxLogo from "../../images/foxhead.png";
export const MediaNav = () => {
  const navIconsContainer = useRef(null);
  const navDescriptionContainer = useRef(null);

  useEffect(() => {
    const iconsContainer = navIconsContainer.current;
    const descriptionsContainer = navDescriptionContainer.current;

    const handleEnter = () => {
      descriptionsContainer.classList.add("view-descriptions");
    };

    // const handleLeave = () => {
    //   descriptionsContainer.classList.remove("view-descriptions");
    // };
    iconsContainer.addEventListener("mouseenter", handleEnter);
    // descriptionsContainer.addEventListener("mouseleave", handleLeave);

    return () => {
      iconsContainer.removeEventListener("mouseenter", handleEnter);
      // descriptionsContainer.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const handleClose = () => {
    const navDescription = navDescriptionContainer.current;
    navDescription.classList.remove("view-descriptions");
  };
  return (
    <>
      <nav className="main-nav-container">
        <section className="nav-icons-container" ref={navIconsContainer}>
          <div className="icon-container">
            <img
              src={foxLogo}
              width="40px"
              alt="An illustration of a foxhead"
            />
          </div>
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
          <div className="cancel-description-container">
            <button onClick={handleClose}>
              <span class="material-symbols-outlined">cancel</span>
            </button>
          </div>
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
