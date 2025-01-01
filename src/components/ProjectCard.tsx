import { Project } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import GithubIcon from "@/../public/assets/github-mark.svg";
import ExternalLinkIcon from "@/../public/assets/external-link.svg";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    title,
    start_date,
    end_date,
    thumbnail,
    short_description,
    github_url,
    live_url,
  } = project;

  const formattedStartDate: string = new Date(start_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
    },
  );
  const formattedEndDate: string = end_date
    ? new Date(end_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : "Present";

  return (
    <Card className="h-auto w-fit overflow-hidden border-2 border-black drop-shadow-4xl">
      {thumbnail && (
        <div className="h-auto w-96">
          <Image
            className="h-full w-full object-cover"
            src={
              typeof thumbnail === "string"
                ? thumbnail
                : thumbnail?.url || "/default-thumbnail.jpg"
            }
            alt={title}
            width={0}
            height={0}
          />
        </div>
      )}
      <div className="h-auto p-4">
        <h2 className="text-lg font-extrabold">{title}</h2>
        <p className="text-sm text-gray-600">
          {formattedStartDate} - {formattedEndDate}
        </p>
        <p className="mt-2 text-sm text-gray-800">{short_description}</p>
      </div>
      {(github_url || live_url) && (
        <div className="flex border-t-2 border-black">
          {github_url && (
            <Link
              className="flex grow items-center justify-center gap-2 border-r-2 border-black py-2"
              href={github_url}
            >
              Github
              <Image
                src={GithubIcon}
                alt="Github Icon"
                width={20}
                height={20}
              />
            </Link>
          )}
          {live_url && (
            <Link className="flex grow items-center justify-center gap-2 py-2" href={live_url}>
              Live URL
              <Image
                src={ExternalLinkIcon}
                alt="External Link"
                width={20}
                height={20}
              />
            </Link>
          )}
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
