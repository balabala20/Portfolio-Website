import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Resume() {
  const [certificate, setCertificate] = useState([]);
  useEffect(() => {
    fetch("/certification.json")
      .then((res) => res.json())
      .then((data) => {
        setCertificate(data.certifications);
      });
  },[]);

  return (
    <div id="resume_page">
      <div id="resume_heading">
        <h2>Resume</h2>
      </div>
      <FontAwesomeIcon id="education_icons" icon={faBook} />
      <h3 id="education_heading">Education</h3>
      <div id="education">
        <div id="education_decoration">
          <div id="dot1" className="dot"></div>
          <div id="dot2" className="dot"></div>
          <div id="dot3" className="dot"></div>
        </div>
        <div id="education_details">
          <div id="btech">
            <h4>B.Tech</h4>
            <p>
              Electrical and Electronics Engineering
              <br />
              2022-2026
              <br />
              Wellfare institute of Engineering|Pendhurthi,Vizag
            </p>
          </div>
          <div id="inter">
            <h4>Intermidiate</h4>
            <p>
              MPC
              <br />
              2020-2022
              <br />
              Sri Basara jn.College|Isakathota,Vizag
            </p>
          </div>
          <div id="school">
            <h4>High School</h4>
            <p>
              SSC
              <br />
              2015-2020
              <br />
              ZPHigh School|Thotagaruvu,Vizag
            </p>
          </div>
        </div>
      </div>
      <div id="certifications">
        <h3 id="certifications_heading">Certifications</h3>
        <div id="certifications_set">
          {certificate.map((item, index) => (
            <div className="certifications" key={index}>
              <h4>{item.name}</h4>
              <img src={item.image} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
