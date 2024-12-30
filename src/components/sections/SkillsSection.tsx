"use client";

import useFetch from "@/hooks/useFetch";
import { Skill, SkillCategory } from "@/payload-types";
import { useEffect, useState } from "react";
import SkillCard from "../SkillCard";
import SkillCategoryTabs from "../SkillCategoryTabs";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkillsSection = () => {
  const [curCategory, setCurCategory] = useState<string>("");
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);

  const {
    data: skillCategories,
    error: skillCategoriesError,
    loading: skillCategoriesLoading,
  } = useFetch<SkillCategory>("/data/skill-categories.json"); // TODO: Change the URL on Production

  const {
    data: skills,
    error: skillsError,
    loading: skillsLoading,
  } = useFetch<Skill>("/data/skills.json"); // TODO: Change the URL on Production

  const updateCurCategory = (categoryId: string) => {
    setCurCategory(categoryId);
  };

  useEffect(() => {
    if (skills && skills.length > 0) {
      if (curCategory === "") {
        setFilteredSkills(skills);
      } else {
        const filteredData = skills.filter((skill) => {
          if (!skill.categories) return true;

          return skill.categories.find(
            (category) =>
              typeof category !== "string" && category.id === curCategory,
          );
        });

        setFilteredSkills(filteredData);
      }
    }
  }, [skills, curCategory]);

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
                className="h-auto rounded-full border-2 border-black bg-white px-4 py-2 drop-shadow-2xl"
              >
                <Skeleton className="my-auto h-4 w-12 bg-gray-300" />
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
        <div className="grid flex-grow grid-cols-1 justify-items-center gap-4 overflow-hidden rounded-xl border-2 border-black bg-white p-6 drop-shadow-4xl sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
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
                  <div className="border-t-2 border-black bg-primary px-2 py-4">
                    <Skeleton className="my-auto h-4 w-auto bg-gray-300" />
                  </div>
                </Card>
              ))}
            </>
          )}
          {filteredSkills &&
            filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
