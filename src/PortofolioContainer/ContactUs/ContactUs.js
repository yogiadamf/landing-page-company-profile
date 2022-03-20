import React from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./ContactUs.css";

export default function ContactUs(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="contact-us-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="contact-us-parent">
        <div className="contact-us-left">
          <span>&#123;finsweet</span>
          <h4>Bespoke software solutions</h4>
          <div className="icon">
            <a href="https://web.facebook.com/yogiadamf">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://web.facebook.com/yogiadamf">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.instagram.com/yogiadamfirdaus/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com/yogiadamf19">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <p>&copy; All rights reserved – Finsweet</p>
        </div>
        <div className="contact-us-mid">
            <a>Company</a>
            <p>About Us</p>
            <p>Careers</p>
            <p>Services</p>
            <p>Blog</p>
        </div>
        <div className="contact-us-mid1">
            <a>Connect</a>
            <p>hi@finsweet.com</p>
            <p>+(123) 456-7890</p>
        </div>
        <div className="contact-us-right">
            <a>Join Newsletter</a>
            <form className="contact-us-form">
            <input type="text" className="subscribe" maxlength="256" name="name-2" placeholder="Type email here"/>
            <button type="submit" class="button is-form-subscribe w-button">Subscribe</button>
            </form>
            <p>Privacy Policy Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}
