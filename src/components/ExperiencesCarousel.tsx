"use client";

import useFetch from "@/hooks/useFetch";
import { Experience } from "@/payload-types";

const ExperiencesCarousel = () => {
  const {
    data: experiences,
    error: experiencesError,
    loading: experiencesLoading,
  } = useFetch<Experience>("/data/experiences.json");

  return <div>ExperiencesCarousel</div>;
};

export default ExperiencesCarousel;
