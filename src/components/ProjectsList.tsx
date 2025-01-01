"use client";

import useFetch from "@/hooks/useFetch";
import { Project } from "@/payload-types";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const {
    data: projects,
    error: projectsError,
    loading: projectsLoading,
  } = useFetch<Project>("/api/projects");

  return projects?.length ? <ProjectCard project={projects[3]} /> : <></>;
};

export default ProjectsList;
