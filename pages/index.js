import styles from "../styles/Home.module.css";
import ProjectsView from "../components/ProjectsView";
import projects from "../constants/projects.json";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Menu currentRoute="/" />
      <ProjectsView projects={projects} />
    </>
  );
}
