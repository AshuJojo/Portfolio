"use client";

import useFetch from "@/hooks/useFetch";
import { Skill, SkillCategory } from "@/payload-types";
import { useState } from "react";
import SkillCard from "../SkillCard";
import SkillCategoryTabs from "../SkillCategoryTabs";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkillsSection = () => {
  const {
    data: skillCategories,
    error: skillCategoriesError,
    loading: skillCategoriesLoading,
  } = useFetch<SkillCategory>("/api/skill-categories");

  const {
    data: skills,
    error: skillsError,
    loading: skillsLoading,
  } = useFetch<Skill>("/api/skills");

  const [curCategory, setCurCategory] = useState<string>("");

  const updateCurCategory = (categoryId: string) => {
    setCurCategory(categoryId);
  };

  return (
    <div className="container min-h-screen border-b-4 border-black">
      <h2 className="section-heading">Skills</h2>
      {/* Skills Container */}
      <div className="flex min-h-[80vh] flex-col gap-4">
        {/* Skills Categories */}
        {(skillCategoriesLoading || skillCategoriesError) && (
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-auto px-4 py-2 rounded-full bg-white border-2 border-black drop-shadow-2xl "
              >
                <Skeleton className="h-4 w-12 bg-gray-300 my-auto" />
              </div>
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
        <div className="overflow-hidden grid flex-grow grid-cols-1 items-center justify-items-center gap-4 rounded-xl border-2 border-black bg-white p-6 drop-shadow-4xl sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {(skillsLoading || skillsError) && (
            <>
              {[...Array(8)].map((_, i) => (
                <Card
                  key={i}
                  className="h-fit w-36 overflow-hidden border-2 border-black drop-shadow-2xl"
                >
                  <div className="p-4">
                    <Skeleton className="my-auto h-24 w-auto bg-gray-300" />
                  </div>
                  <div className="border-t-2 border-black bg-primary py-4 px-2">
                    <Skeleton className="my-auto h-4 w-auto bg-gray-300" />
                  </div>
                </Card>
              ))}
            </>
          )}
          {skills &&
            skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
