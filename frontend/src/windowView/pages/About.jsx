
function About() {
  return (
    <div id="about">
      <div>
        <h2 id="about_heading">About Me</h2>
      </div>
      <div id="about_text">
        <p>
          As an Electrical and Electronics Engineering student with a passion
          for coding and web development, I'm excited to share my projects and
          experiences with you. With a strong foundation in electronics and a
          growing expertise in full-stack development, I'm always looking for
          innovative ways to bridge the gap between technology and design.
        </p>
        <h4 >My Goals</h4>
        <ul>
          <li>
            To leverage my technical skills to create innovative solutions that
            make a positive impact.
          </li>
          <li>
            To continuously learn and adapt to emerging technologies and
            industry demands.
          </li>
          <li>
            To collaborate with like-minded individuals on exciting projects
            that push the boundaries of what's possible.
          </li>
        </ul>
      </div>
      <div>
        <h2 id="about_heading2">My Interests</h2>
        <div id="skills_layout">
          <div id="webdesign" className="web">
            <img src="img/7706581-removebg-preview.png" alt="img" />
            <div id="webdesign_text">
              <h3>Web Design</h3>
              <p>
                The most modern and high-quality design model at a professional
                input
              </p>
            </div>
          </div>
          <div id="webdevelopment" className="web">
            <img src="/img/webdevelopment.png" alt="img" id="imgphoto1" />
            <div id="webdevelopment_text">
              <h3>Web Development</h3>
              <p>High-Quality Development skills</p>
            </div>
          </div>
          <div id="coding" className="web">
            <img src="/img/coading.png" alt="img" />
            <div id="coding_text">
              <h3>Coading</h3>
              <p>Good at Coading </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;