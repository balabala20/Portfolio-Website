import { Link } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  let profile = (
    <div id="profile_section">
      <div id="photo">
        <img src="/img/photo.jpg" alt="img" />
      </div>
      <div id="mobile_name">
        <h2>Balasiva Dopathi</h2>
      </div>
      <div id="work">Full Stack Web Developer</div>
      <div id="details">
        <div id="email">
          <div className="contact_icons">
            <Link
              style={{ textDecoration: "none", color: "black",fontSize: "35px" }}
              to="mailto:dopathibalasiva@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
          <div id="mobile_email_text">
            Email
            <br />
            dopathibalasiva@gmail.com
          </div>
        </div>
        <div id="phone">
          <div className="contact_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="tel:8179403820"
            >
              <FontAwesomeIcon icon={faPhone} />
            </Link>
          </div>
          <div id="mobile_phone_text">
            Phone
            <br />
            8179403820
          </div>
        </div>
        <div id="location">
          <div className="contact_icons">
            <Link
              style={{ textDecoration: "none", color: "black",fontSize: "35px"  }}
              to="https://maps.app.goo.gl/MVUbkaywoSGRpN4o6"
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </Link>
          </div>
          <div id="mobile_location_text">
            Location
            <br />
            Vizag, Andhra Pradesh, India
          </div>
        </div>
        <div id="social_icons">
          <span className="social_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="https://www.linkedin.com/in/balasiva-dopathi-06a613309/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bvhn%2BakqTT6Cpoho0zqzuwA%3D%3D"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </span>
          <span className="social_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="https://github.com/balabala20"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </span>
          <span className="social_icons">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="https://wa.me/8179403820"
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
  return profile;
}

export default Profile;