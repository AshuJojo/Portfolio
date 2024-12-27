import { Skill } from "@/payload-types";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card className="h-fit w-36 overflow-hidden border-2 border-black drop-shadow-2xl">
      <div className="px-4 py-4">
        <Image
          className="m-auto w-auto h-32"
          src={
            typeof skill.icon === "string"
              ? (skill.icon ?? "/default-icon.png")
              : (skill.icon.url ?? "/default-icon.png")
          }
          alt={skill.skill}
          width={24}
          height={24}
        />
      </div>
      <CardHeader className="border-t-2 border-black bg-primary p-2">
        <CardTitle className="text-extrabold text-stroke-2 text-center text-lg drop-shadow-xl">
          {skill.skill}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default SkillCard;
