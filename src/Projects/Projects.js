import React, { useState } from "react";
import "./Projects.css";
// import './img/c-language.png';
import c from "./img/c-language.png";
import thumbnailImg from "./img/comp1.jpg";
import thumbnailImg2 from "./img/comp2.jpg";
import clock from "./img/clock.png";
import github from "./img/github.png";
import website from "./img/link.png";
import ongoing from "./img/ongoing.png";
import past from "./img/past.png";
function Projects() {
  const [toggle, setToggle] = useState(0);
  return (
    <div>
      <div className="totalPage">
        <h2 className="Heading">PROJECTS</h2>

        {/* button for switching to ongoing and past projects */}
        <div className="changingButtons">
        <div onClick={()=>setToggle(0)} className="ongoingProjects buttons {toggle===0 ? `borderUp` : null }"><img src={ongoing} alt="" /></div>
        <div onClick={()=>setToggle(1)}   className="pastProjects buttons {toggle===0 ? `borderDown` : null }"><img src={past} alt="" /></div>
        </div>
        
        {/* switching using ternary operator */}
        
      {toggle===0 ?  
      <div className="ongoingProjectSection">
          <div className="Projects">
              <div className="number-col">

              <h1 className="number">1</h1>z
              </div>
            

            <div className="info-col">
              <div className="name">PROJECT NAME</div>

              <div className="tech-stack">
                <img src={c} alt="hello" className="lang" />
              </div>
              <div className="project-image">
                <img src={thumbnailImg} alt="" className="thumbnailImgLeft" />
                <img src={thumbnailImg2} alt="" className="thumbnailImgRight" />
              </div>
              <div className="project-about">
                <p className="about-project">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  blanditiis laudantium a nesciunt tempora placeat laboriosam
                  nobis omnis sint porro repellat nam ipsam, doloribus excepturi
                  quis? Dolores necessitatibus dolore quia.
                </p>
              </div>
              <div className="links">
                <div className="timeTaken">
                  <img src={clock} alt="" className="clock-time" />
                  <p className="timeText">20days</p>
                </div>

                <div className="githubLink">
                  <img src={github} alt="" className="github" />
                  <a href="#" className="githubLinkText">
                    Github
                  </a>
                </div>

                <div className="websiteLink">
                  <img src={website} alt="" className="website" />
                  <a href="#" className="websiteLinkText">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Projects">
            <div className="number-col">
              <h1 className="number">2</h1>
            </div>

            <div className="info-col">
              <div className="name">PROJECT NAME</div>

              <div className="tech-stack">
                <img src={c} alt="hello" className="lang" />
              </div>
              <div className="project-image">
                <img src={thumbnailImg} alt="" className="thumbnailImgLeft" />
                <img src={thumbnailImg2} alt="" className="thumbnailImgRight" />
              </div>
              <div className="project-about">
                <p className="about-project">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  blanditiis laudantium a nesciunt tempora placeat laboriosam
                  nobis omnis sint porro repellat nam ipsam, doloribus excepturi
                  quis? Dolores necessitatibus dolore quia.
                </p>
              </div>
              <div className="links">
                <div className="timeTaken">
                  <img src={clock} alt="" className="clock-time" />
                  <p className="timeText">20days</p>
                </div>

                <div className="githubLink">
                  <img src={github} alt="" className="github" />
                  <a href="#" className="githubLinkText">
                    Github
                  </a>
                </div>

                <div className="websiteLink">
                  <img src={website} alt="" className="website" />
                  <a href="#" className="websiteLinkText">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Projects">
            <div className="number-col">
              <h1 className="number">3</h1>
            </div>

            <div className="info-col">
              <div className="name">PROJECT NAME</div>

              <div className="tech-stack">
                <img src={c} alt="hello" className="lang" />
              </div>
              <div className="project-image">
                <img src={thumbnailImg} alt="" className="thumbnailImgLeft" />
                <img src={thumbnailImg2} alt="" className="thumbnailImgRight" />
              </div>
              <div className="project-about">
                <p className="about-project">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  blanditiis laudantium a nesciunt tempora placeat laboriosam
                  nobis omnis sint porro repellat nam ipsam, doloribus excepturi
                  quis? Dolores necessitatibus dolore quia.
                </p>
              </div>
              <div className="links">
                <div className="timeTaken">
                  <img src={clock} alt="" className="clock-time" />
                  <p className="timeText">20days</p>
                </div>

                <div className="githubLink">
                  <img src={github} alt="" className="github" />
                  <a href="#" className="githubLinkText">
                    Github
                  </a>
                </div>

                <div className="websiteLink">
                  <img src={website} alt="" className="website" />
                  <a href="#" className="websiteLinkText">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Projects">
            <div className="number-col">
              <h1 className="number">4</h1>
            </div>

            <div className="info-col">
              <div className="name">PROJECT NAME</div>

              <div className="tech-stack">
                <img src={c} alt="hello" className="lang" />
              </div>
              <div className="project-image">
                <img src={thumbnailImg} alt="" className="thumbnailImgLeft" />
                <img src={thumbnailImg2} alt="" className="thumbnailImgRight" />
              </div>
              <div className="project-about">
                <p className="about-project">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  blanditiis laudantium a nesciunt tempora placeat laboriosam
                  nobis omnis sint porro repellat nam ipsam, doloribus excepturi
                  quis? Dolores necessitatibus dolore quia.
                </p>
              </div>
              <div className="links">
                <div className="timeTaken">
                  <img src={clock} alt="" className="clock-time" />
                  <p className="timeText">20days</p>
                </div>

                <div className="githubLink">
                  <img src={github} alt="" className="github" />
                  <a href="#" className="githubLinkText">
                    Github
                  </a>
                </div>

                <div className="websiteLink">
                  <img src={website} alt="" className="website" />
                  <a href="#" className="websiteLinkText">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>: 
       <div className="pastProjectSection">
       <div className="Projects">
            <div className="number-col">
              <h1 className="number">1</h1>
            </div>

            <div className="info-col">
              <div className="name">PROJECT NAME</div>

              <div className="tech-stack">
                <img src={c} alt="hello" className="lang" />
              </div>
              <div className="project-image">
                <img src={thumbnailImg} alt="" className="thumbnailImgLeft" />
                <img src={thumbnailImg2} alt="" className="thumbnailImgRight" />
              </div>
              <div className="project-about">
                <p className="about-project">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  blanditiis laudantium a nesciunt tempora placeat laboriosam
                  nobis omnis sint porro repellat nam ipsam, doloribus excepturi
                  quis? Dolores necessitatibus dolore quia.
                </p>
              </div>
              <div className="links">
                <div className="timeTaken">
                  <img src={clock} alt="" className="clock-time" />
                  <p className="timeText">20days</p>
                </div>

                <div className="githubLink">
                  <img src={github} alt="" className="github" />
                  <a href="#" className="githubLinkText">
                    Github
                  </a>
                </div>

                <div className="websiteLink">
                  <img src={website} alt="" className="website" />
                  <a href="#" className="websiteLinkText">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
     </div>
        }

      </div>
    </div>
  );
}
export default Projects;
