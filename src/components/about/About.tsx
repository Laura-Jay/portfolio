import "./about.css"
import ME from "../../images/me.jpg"
import { FaUserCircle } from "react-icons/fa"

export default function About(): JSX.Element {

    return (
        <section id="about">
            <h5>Learn More</h5>
            <h2>About Me</h2>

            <div className="about--container">
                <div className="about-me">
                    <div className="about-me--image">
                        <img src={ME} alt="profile picture"/> 
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaUserCircle className="about-icon" />
                            <h5>Training</h5>
                            <small>Academy</small>
                        </article>
                        <article className="about-card">
                            <FaUserCircle className="about-icon" />
                            <h5>Education</h5>
                            <small>Architecture / Engineering</small>
                        </article>
                        <article className="about-card">
                            <FaUserCircle className="about-icon" />
                            <h5>Projects</h5>
                            <small>5 +</small>
                        </article>
                    </div>

                    <p> 
                    Software development  scholarship graduate with a background in creative design and experience
                     working within a team to deliver full PERN stack web applications from conception to deployment.
                    Professional strengths include creative problem solving, written and verbal communication and
                    time management. Detail oriented mindset developed  from 3 years working within the construction industry. 
                    </p>

                    <a href="#contact" className="btn btn-primary">Get in Touch</a>
                </div>
            </div>
        </section>
    )
}