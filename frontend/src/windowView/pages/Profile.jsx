import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div id="profile">
      <div id="photo">
        <img src="/img/photo.jpg" alt="img" />
      </div>
      <div id="name">
        <h2>Balasiva Dopathi</h2>
      </div>
      <div id="work">Full Stack Web Developer</div>
      <div id="details">
        <div id="email">
          <div className="icons">
            <div id="skills_fa">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "40px",
                }}
                to="mailto:dopathibalasiva@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </div>
          <div id="email_text">
            Email
            <br />
            dopathibalasiva@gmail.com
          </div>
        </div>
        <div id="phone">
          <div className="icons">
            <div id="skills_fa">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "40px",
                }}
                to="tel:8179403820"
              >
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </div>
          </div>
          <div id="phone_text">
            Phone
            <br />
            8179403820
          </div>
        </div>
        <div id="location">
          <div className="icons">
            <div id="skills_fa">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "40px",
                }}
                to="https://maps.app.goo.gl/MVUbkaywoSGRpN4o6"
              >
                <FontAwesomeIcon icon={faLocationDot} />
              </Link>
            </div>
          </div>
          <div id="location_text">
            Location
            <br />
            Vizag, Andhra Pradesh, India
          </div>
        </div>
        <div id="contact">
          <span className="contact_icons">
            <div id="skills_fa">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "40px",
                }}
                to="https://www.linkedin.com/in/balasiva-dopathi-06a613309/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bvhn%2BakqTT6Cpoho0zqzuwA%3D%3D"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </span>
          <span className="contact_icons">
            <div id="skills_fa">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "40px",
                }}
                to="https://github.com/balabala20"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </span>
          <span className="contact_icons">
            <div id="skills_fa">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "40px",
                }}
                to="https://wa.me/8179403820"
              >
                <FontAwesomeIcon icon={faSquareWhatsapp} />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
