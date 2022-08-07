import React from "react";
import PageContainer from "../components/PageContainer";
import ProjectCard from "../components/ProjectCard";
import devupImg from "../imgs/devup-logo.png";
import discordImg from "../imgs/discord-logo.png";
import ytImg from "../imgs/yt-logo.jpg";
import { Grid } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "DevUp",
    img: devupImg,
    desc: "A CRUD web application built with a Flask backend and React.js frontend, to help developers find others to collaborate with on projects. Hosted on an AWS EC2 instance using Docker containers. Implemented CI/CD with GitHub Actions, testing with Jest and Postman, and monitoring with cAdvisor, Grafana, and Prometheus.",
    repo: "https://github.com/LaloVene/MLH-PE-Project",
    website: "https://dev-up.tech",
  },
  {
    id: 2,
    title: "Discord Bot",
    img: discordImg,
    desc: "A Python Discord bot that interacts with Twitch, Riot Games, and Jikan API to fetch data and embed it in a Discord message. Implements other functions such as the ability to change roles on message reactions, purge messages, and search for definitions on Urban Dictionary.",
    repo: "https://github.com/angelaw7/discord-bot",
    website: "",
  },
  {
    id: 3,
    title: "Download from YouTube",
    img: ytImg,
    desc: "A Python script with a Tkinter GUI to download files from YouTube using PyTube. The GUI allows the user to choose between downloading video or audio files, and a single video or an entire playlist.",
    repo: "https://github.com/angelaw7/Download-from-YouTube",
    website: "",
  },
];

const Projects = () => {
  return (
    <div id="projects" style={{ backgroundColor: "#F9D1D1" }}>
      <PageContainer>
        <h1>Projects</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                img={project.img}
                desc={project.desc}
                website={project.website}
                repo={project.repo}
              />
            );
          })}
        </Grid>
      </PageContainer>
    </div>
  );
};

export default Projects;
