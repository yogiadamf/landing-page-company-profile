import React from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Blog.css";
import blog from "../../assets/Home/blog.jpg";
import blog1 from "../../assets/Home/blog2.jpg";
import blog2 from "../../assets/Home/blog3.jpg";

export default function Blog(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="blog-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="blog-parent">
        <h1>Latest Blog & News</h1>
      </div>
      <div className="blog-grid">
        <div className="grid-item">
          <div className="blog-card">
            <img className="card-img" src={blog} alt="img1"></img>
            <div className="card-content">
              <h1> Why you have to digitalize in 2021</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="/">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="blog-card">
            <img className="card-img" src={blog1} alt="img1"></img>
            <div className="card-content">
              <h1> Our internal process and longerm vision</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="/">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="blog-card">
            <img className="card-img" src={blog2} alt="img2"></img>
            <div className="card-content">
              <h1> Helping the next generation of leaders</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="/">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
