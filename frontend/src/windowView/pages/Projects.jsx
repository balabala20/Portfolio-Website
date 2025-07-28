import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data.projects);
      });
  }, []);

  return (
    <div id="projects_page">
      <div id="projects_heading">
        <h2>Projects</h2>
      </div>
      <div id="projects_set">
        {project.map((item, index) => (
          <div className="projects" key={index}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
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
      </div>
    </div>
  );
}

export default Projects;
