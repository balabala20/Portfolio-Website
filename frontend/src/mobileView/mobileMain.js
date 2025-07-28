import Profile from "./pages/profile";
import About from "./pages/about";
import Skills from "./pages/skills";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function MobileMain() {
  return (
    <main id="mobileMain">
      <Profile />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
}

export default MobileMain;
