"use client";

import useFetch from "@/hooks/useFetch";
import { Experience } from "@/payload-types";
import ExperienceCard from "./ExperienceCard";

const ExperiencesCarousel = () => {
  const {
    data: experiences,
    error: experiencesError,
    loading: experiencesLoading,
  } = useFetch<Experience>("/data/experiences.json");

  return experiences?.length ? (
    <ExperienceCard experience={experiences[0]} />
  ) : (
    <></>
  );
};

export default ExperiencesCarousel;
