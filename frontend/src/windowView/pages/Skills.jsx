import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faDatabase,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faPython,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div id="overskills">
      <div>
        <h2 id="skills_heading">Skills</h2>
      </div>
      <h4>Programming skills</h4>
      <div id="programming_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faJava} />
          </div>
          <h3>Java</h3>
          <p>Object-Oriented Programming Language.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faPython} />
          </div>
          <h3>Python</h3>
          <p>Powerful scripting & AI development.</p>
        </div>
      </div>

      <h4>Professional skills</h4>
      <div id="professional_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <h3>Communication Skills</h3>
          <p>the ability to effectively convey information,idea and emotion</p>
        </div>
        <div className="skills">
          <h3>Problem solving</h3>
          <p>I am good at finding solutions</p>
        </div>
        <div className="skills">
          <h3>DSA</h3>
          <p>Powerful scripting & AI development.</p>
        </div>
      </div>

      <h4>Frontend skills</h4>
      <div id="frontend_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <h3>HTML</h3>
          <p>Structuring the web pages.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faCss3Alt} />
          </div>
          <h3>CSS</h3>
          <p>Styling and design for the web.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <h3>JavaScript</h3>
          <p>Interactive and dynamic web development.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <h3>React</h3>
          <p>
            framework of JavaScript, to make responsive and dynamic webpages
          </p>
        </div>
      </div>

      <h4>Backend skills</h4>
      <div id="backend_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <h3>Node.js</h3>
          <p>Backend development using JavaScript.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faServer} />
          </div>
          <h3>Express.js</h3>
          <p>Fast and lightweight web framework.</p>
        </div>
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <h3>MongoDB</h3>
          <p>NoSQL database for scalable apps.</p>
        </div>
      </div>

      <h4>Technical skills</h4>
      <div id="backend_skills" className="skills_set">
        <div className="skills">
          <div id="skills_fa">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <h3>Github</h3>
          <p>collebration and connections</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;