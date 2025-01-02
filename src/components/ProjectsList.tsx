"use client";

import useFetch from "@/hooks/useFetch";
import { Project } from "@/payload-types";
import ProjectCard from "./ProjectCard";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const ProjectsList = () => {
  const {
    data: projects,
    error: projectsError,
    loading: projectsLoading,
  } = useFetch<Project>("/api/projects");

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {projects?.length &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      {projectsLoading &&
        [...Array(4)].map((_, i) => (
          <Card
            key={i}
            className="flex h-auto w-auto flex-col justify-between overflow-hidden border-2 border-black drop-shadow-4xl"
          >
            <Skeleton className="h-48 w-auto rounded-b-none" />
            <div className="flex grow flex-col gap-2 p-4">
              <Skeleton className="h-6 w-1/2 rounded-full" />
              <Skeleton className="h-4 w-3/4 rounded-full" />
              <div className="mt-2 flex flex-col gap-1">
                <Skeleton className="h-4 w-full rounded-full" />
                <Skeleton className="h-4 w-full rounded-full" />
                <Skeleton className="h-4 w-full rounded-full" />
              </div>
            </div>
            <div className="flex border-t-2 border-black">
              <div className="w-1/2 border-r-2 border-black py-2">
                <Skeleton className="mx-auto h-6 w-3/4 rounded-full" />
              </div>
              <div className="w-1/2 py-2">
                <Skeleton className="mx-auto h-6 w-3/4 rounded-full" />
              </div>
            </div>
          </Card>
        ))}
      {projectsError && <p>Error loading projects</p>}
    </div>
  );
};

export default ProjectsList;
