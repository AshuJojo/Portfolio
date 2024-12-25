"use client";

import { SkillCategory } from "@/payload-types";
import { PaginatedResponse } from "@/types/PaginatedResponse";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import SkillCategoryTabs from "../SkillCategoryTabs";
import { Skeleton } from "../ui/skeleton";

const SkillsSection = () => {
  const [skillCategories, setSkillCategories] = useState<
    SkillCategory[] | null
  >(null);
  const [curCategory, setCurCategory] = useState<string>("");

  const fetchSkillCategories = async () => {
    try {
      const res: AxiosResponse<PaginatedResponse<SkillCategory>> =
        await axios.get(`/api/skill-categories`);

      return res.data.docs;
    } catch (e: unknown) {
      if (e instanceof Error) console.error(e.message);

      return null;
    }
  };

  const updateCurCategory = (categoryId: string) => {
    setCurCategory(categoryId);
  };

  useEffect(() => {
    (async () => {
      const data: SkillCategory[] | null = await fetchSkillCategories();

      setSkillCategories(data);
    })();
  }, []);

  return (
    <div className="container min-h-screen border-b-4 border-black">
      <h2 className="section-heading">Skills</h2>
      {/* Skills Container */}
      <div className="flex flex-col gap-4 min-h-[80vh]">
        {/* Skills Categories */}
        {!skillCategories && (
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
        {/* <div className="bg-white flex-grow rounded-xl border-2 border-black drop-shadow-4xl"></div> */}
      </div>
    </div>
  );
};

export default SkillsSection;
