import Profile from "./pages/Profile";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Content({ currentPage }) {
  let content;
  if (currentPage === "about") {
    content = <About />;
  } else if (currentPage === "skills") {
    content = <Skills />;
  } else if (currentPage === "resume") {
    content = <Resume />;
  } else if (currentPage === "projects") {
    content = <Projects />;
  } else if (currentPage === "contact") {
    content = <Contact />;
  }
  return <div id="content">{content}</div>;
}

function Main({ currentPage }) {
  return (
    <main id="main">
      <Profile />
      <Content currentPage={currentPage} />
    </main>
  );
}

export default Main;
