import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


function Resume() {
  const [certificate,setCertificate] = useState([])
  useEffect(()=>{
    fetch("/certification.json")
    .then(res=> res.json())
    .then(data=> {
      setCertificate(data.certifications)
    })
  },[])

  let resume = (
    <div id="mobile_resume_section">
      <div id="mobile_resume_heading">
        <h2>Resume</h2>
      </div>
      <div id="mobile_resume_set">
        <FontAwesomeIcon id="education_icons" icon={faBook} />
        <h3 id="education_heading">Education</h3>
        <div id="education">
          <div id="mobile_education_decoration">
            <div id="dot1" className="dot"></div>
            <div id="dot2" className="dot"></div>
            <div id="dot3" className="dot"></div>
          </div>
          <div id="education_details">
            <div id="btech">
              <h4>B.Tech</h4>
              <p>
                | Electrical and Electronics Engineering
                <br />
                | 2022-2026
                <br />| Wellfare institute of Engineering|Pendhurthi,Vizag
              </p>
            </div>
            <div id="inter">
              <h4>Intermidiate</h4>
              <p>
                | MPC
                <br />
                | 2020-2022
                <br />| Sri Basara jn.College|Isakathota,Vizag
              </p>
            </div>
            <div id="school">
              <h4>High School</h4>
              <p>
                | SSC
                <br />
                | 2015-2020
                <br />| ZPHigh School|Thotagaruvu,Vizag
              </p>
            </div>
          </div>
        </div>
        <div id="certifications">
          <h2 id="certifications_heading">certifications</h2>
          {certificate.map((item,index)=>(
            <div className="mobile_certifications" key={index}>
            <h6>{item.name} </h6>
            <img src={item.image} alt={item.name} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
  return resume;
}

export default Resume;