import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [project, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);
  let projects = (
    <div id="mobile_project_section">
      <div id="mobile_project_heading">
        <h2>Projects</h2>
      </div>
      <div id="project_set">
        {project.map((item, index) => (
          <div className="mobile-projects" key={index}>
            <h3>{item.name}</h3>
            <Link to= {item.url}>
              <img src={item.image} alt="img" />
            </Link>
           <p>
              {item.description}
              <br />
              {item.technologies}
              <br />
            </p>
            <Link to={item.url}>
              <button>Click Me</button>
            </Link>
          </div>
        ))}
        {/* <div className="mobile-projects">
          <h3>Calculator</h3>
          <Link to="https://calculator-app-rosy-iota.vercel.app/">
            <img src="img/project2.jpg" alt="img" />
          </Link>
          <p>
            Technologies used: React. <br />
            Check it out: click on it
          </p>
        </div> */}
      </div>
    </div>
  );
  return projects;
}

export default Projects;
