import ProjectsList from "../components/ProjectsList";
import projects from "../constants/projects.json";
import Menu from "../components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codercat Projects</title>
      </Head>
      <Menu currentRoute="/" />
      <ProjectsList projects={projects.filter((p) => p.published)} />
    </>
  );
}
