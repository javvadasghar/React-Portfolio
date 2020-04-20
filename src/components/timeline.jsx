import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Python Developer at Bee Social Pvt. Ltd.{" "}
                          <span>February 2020-present</span>
                        </h2>
                        <p>
                          <li>
                            Used the BeautifulSoup Python Library to extract
                            desire data from a given URL an automated way.{" "}
                          </li>
                          <li>
                            Stored crawled HTML/XML with Python HTML Parser lib{" "}
                          </li>
                          <li> Created a breadth first Web Crawler </li>
                          <li>
                            {" "}
                            Scrap web and social media data through selenium in
                            python
                          </li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineering from Comsats University Islamabad
                          <span>2016-2020</span>
                        </h2>
                        <p>
                          I did my under-graduation studies with major in
                          Software Engineering. I have taken courses like ICP,
                          OOPs, Computer Networks, , Web Engineering through out
                          4 years and have better understanding of these
                          subjects.I have also been part of IEEE Society
                          (Student Branch) since my first year of college.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          F.Sc Engineering <span>2013-2015</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths. During my
                          time at school, I have developed interest in solving
                          complex problems of the fundamental physics which
                          helped me to improve my understanding of any problem
                          and also my mathematical skills to actually solve the
                          problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
