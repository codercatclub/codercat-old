import ProjectsList from "../components/ProjectsList";
import projects from "../constants/projects.json";
import Menu from "../components/Menu";
import Head from "next/head";
import SocialIcons from "../components/SocialIcons";
import { socialIconsUsers } from "../constants";

export default function Home() {
  return (
    <>
      <div className="center-container">
        <Head>
          <title>Codercat Projects</title>
        </Head>
        <Menu currentRoute="/" />
        <ProjectsList projects={projects.filter((p) => p.published)} />
        <SocialIcons users={socialIconsUsers} />
      </div>
    </>
  );
}
