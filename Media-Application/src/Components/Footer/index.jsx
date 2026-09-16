import footerImage from "../../images/foxhead.png";

export const MediaFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-company-logo-container">
          <img
            src={footerImage}
            height="70px"
            width="70px"
            alt="Fox head illustration"
          />

          <p>&copy;foxy74media.com. All Rights Reserved</p>
        </div>

        <div className="back-to-top-container">
<span class="material-symbols-outlined">
keyboard_double_arrow_up
</span>
          <p>Back To Top</p>
        </div>
        <div className="footer-link-container">
          <a href="#">
            <p>About Us</p>
          </a>
          <a href="#">
            <p>Contact Us</p>
          </a>
          <a href="#">
            <p>Terms And Conditions</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
        </div>
      </footer>
    </>
  );
};
