import { Experience } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { differenceInMonths } from "date-fns";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const {
    company_logo,
    company_name,
    role,
    start_date,
    end_date,
    description,
  } = experience;

  const formatedStartDate: string = new Date(start_date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    },
  );

  const formatedEndDate: string = end_date
    ? new Date(end_date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";

  // Calculate the difference in months between the start and end date
  const dateDifferenceInMonths =
    differenceInMonths(end_date || new Date(), start_date) + 2;

  return (
    <Card className="max-w-1/2 flex w-fit border-2 border-black p-8 drop-shadow-4xl">
      {/* Card Media */}
      <div className="h-fit w-fit rounded-full border-2 border-black p-2 shadow-4xl">
        <Image
          className="h-16 w-16 object-contain"
          src={
            company_logo
              ? typeof company_logo === "string"
                ? company_logo
                : company_logo?.url || ""
              : ""
          }
          alt={company_name || "Company Logo"}
          width={0}
          height={0}
        />
      </div>
      <CardContent className="pb-0">
        <h3 className="text-2xl font-bold">{role}</h3>
        <h4 className="text-lg font-semibold">{company_name}</h4>
        <p className="text-sm font-semibold">
          {formatedStartDate} - {formatedEndDate} • {dateDifferenceInMonths}{" "}
          Months
        </p>
        {description && (
          <RichText
            data={description}
            className="mt-2 [&>ul]:ml-5 [&>ul]:list-disc"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
