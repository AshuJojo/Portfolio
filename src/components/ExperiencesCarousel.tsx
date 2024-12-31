"use client";

import useFetch from "@/hooks/useFetch";
import { Experience } from "@/payload-types";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

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
    sortedExperiences.map((experience) => (
      <ExperienceCard key={experience.id} experience={experience} />
    ))
  ) : (
    <></>
  );
};

export default ExperiencesCarousel;
