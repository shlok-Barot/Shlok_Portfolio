import React from "react";
import ConfigData from "./configData";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Latest Projects</h3>
                {/* <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p> */}
                <div className="line-mf"></div> 
              </div>  
            </div>
          </div>
          <div className="row">
            {ConfigData.WorkProjectsData.map((data, i) => (
              <div className="col-md-4" key={i}>
                <div className="work-box">
                  <a href={data.image1} data-lightbox="gallery-vmarine">
                    <div className="work-img">
                      <img
                        src={data.image1}
                        alt={data.projectName}
                        className="img-fluid"
                      />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">{data.projectName}</h2>
                          <div className="w-more">
                            <span className="w-ctegory">
                              {data.projectCategory}
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href={data.image2}
                    data-lightbox="gallery-vmarine"
                    style={{ display: "none" }}
                  >
                    jsx-a11y/anchor-has-content warning
                  </a>
                </div>
              </div>
            ))}

            {/* <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
