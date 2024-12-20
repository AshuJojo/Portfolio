"use client";

import { SkillCategory } from "@/payload-types";
import { PaginatedResponse } from "@/types/PaginatedResponse";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
        <div className="flex gap-2">
          <Button
            className={
              curCategory === ""
                ? "rounded-full text-black font-bold disabled:opacity-100"
                : "rounded-full text-black font-bold bg-white hover:bg-primary"
            }
            dropShadow={curCategory === "" ? "none" : "sm"}
            disabled={curCategory === ""}
            onClick={() => {
              setCurCategory("");
            }}
          >
            All
          </Button>
          {skillCategories &&
            skillCategories.map((category) => (
              <Button
                key={category.id}
                className={
                  curCategory === category.id
                    ? "rounded-full text-black font-bold disabled:opacity-100"
                    : "rounded-full text-black font-bold bg-white hover:bg-primary"
                }
                dropShadow={curCategory === category.id ? "none" : "sm"}
                disabled={curCategory === category.id}
                onClick={() => {
                  setCurCategory(category.id);
                }}
              >
                {category.name}
              </Button>
            ))}
        </div>
        {/* Skills */}
        {/* <div className="bg-white flex-grow rounded-xl border-2 border-black drop-shadow-4xl"></div> */}
      </div>
    </div>
  );
};

export default SkillsSection;
