"use client";

import useFetch from "@/hooks/useFetch";
import { Experience } from "@/payload-types";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

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
    <></>
  );
};

export default ExperiencesCarousel;
