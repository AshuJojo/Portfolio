"use client";

import { SkillCategories } from "@/collections/Profile/SkillCategories";
import useFetch, { useFetchResponse } from "@/hooks/useFetch";
import { Skill, SkillCategory } from "@/payload-types";
import { PaginatedResponse } from "@/types/PaginatedResponse";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import SkillCategoryTabs from "../SkillCategoryTabs";

const SkillsSection = () => {
  // const [skills, setSkills] = useState<Skill[] | null>(null);
  const {
    data: skillCategories,
    error: skillCategoriesError,
    loading: skillCategoriesLoading,
  } = useFetch<SkillCategory>("/api/skill-categories");

  const [curCategory, setCurCategory] = useState<string>("");

  const updateCurCategory = (categoryId: string) => {
    setCurCategory(categoryId);
  };

  return (
    <div className="container min-h-screen border-b-4 border-black">
      <h2 className="section-heading">Skills</h2>
      {/* Skills Container */}
      <div className="flex flex-col gap-4 min-h-[80vh]">
        {/* Skills Categories */}
        {(skillCategoriesLoading || skillCategoriesError) && (
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-7 w-20 rounded-full bg-white border-2 border-black drop-shadow-2xl"
              />
            ))}
          </div>
        )}
        {skillCategories && (
          <SkillCategoryTabs
            skillCategories={skillCategories}
            curCategory={curCategory}
            updateCurCategory={updateCurCategory}
          />
        )}
        {/* Skills */}
        <div className="bg-white flex-grow rounded-xl border-2 border-black drop-shadow-4xl"></div>
      </div>
    </div>
  );
};

export default SkillsSection;
