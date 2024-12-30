import { Experience } from "@/payload-types";
import Image from "next/image";
import { Card } from "./ui/card";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  console.log("experience", experience);
  return (
    <Card>
      {/* Card Media */}
      <div className="shadow-4xl h-fit w-fit rounded-full border-2 border-black p-2">
        <Image
          className="h-20 w-20 object-contain"
          src={
            experience.company_logo
              ? typeof experience.company_logo === "string"
                ? experience.company_logo
                : experience.company_logo?.url || ""
              : ""
          }
          alt={experience.company_name || "Company Logo"}
          width={0}
          height={0}
        />
      </div>
    </Card>
  );
};

export default ExperienceCard;
