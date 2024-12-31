"use client";

import useFetch from "@/hooks/useFetch";
import { Experience } from "@/payload-types";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";

const ExperiencesCarousel = () => {
  const [sortedExperiences, setSortedExperiences] = useState<Experience[]>([]);
  const {
    data: experiences,
    error: experiencesError,
    loading: experiencesLoading,
  } = useFetch<Experience>("/data/experiences.json");

  useEffect(() => {
    if (experiences?.length) {
      setSortedExperiences(
        experiences.sort(
          (a, b) =>
            new Date(b.end_date ?? new Date()).getTime() -
            new Date(a.start_date ?? new Date()).getTime(),
        ),
      );
    }
  }, [experiences]);

  return sortedExperiences?.length ? (
    <Carousel>
      <CarouselContent>
        {sortedExperiences.map((experience) => (
          <CarouselItem key={experience.id}>
            <ExperienceCard experience={experience} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ) : (
    <>
      {experiencesLoading && (
        <Card className="mx-auto mb-4 flex w-fit border-2 border-black p-8 drop-shadow-4xl">
          {/* Card Media */}
          <Skeleton className="h-24 w-24 rounded-full border-2 border-black p-2 shadow-4xl" />
          <CardContent className="flex flex-col gap-6 pb-0">
            <div className="flex flex-col gap-2 pb-0">
              <Skeleton className="h-8 w-64 rounded-full" />
              <Skeleton className="h-6 w-72 rounded-full" />
              <Skeleton className="h-4 w-52 rounded-full" />
            </div>
            <div className="flex flex-col gap-2 pb-0">
              <Skeleton className="h-4 w-96 rounded-full" />
              <Skeleton className="h-4 w-96 rounded-full" />
              <Skeleton className="h-4 w-96 rounded-full" />
            </div>
          </CardContent>
        </Card>
      )}
      {experiencesError && <></>}
    </>
  );
};

export default ExperiencesCarousel;
