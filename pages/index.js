import ProjectsList from "../components/ProjectsList";
import projects from "../constants/projects.json";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Menu currentRoute="/" />
      <ProjectsList projects={projects} />
    </>
  );
}
