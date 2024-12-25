import { SkillCategory } from "@/payload-types";
import { Button } from "./ui/button";

interface SkillCategoryTabsProps {
  skillCategories: SkillCategory[];
  curCategory: string;
  updateCurCategory: (category: string) => void;
}

const SkillCategoryTabs = ({
  skillCategories,
  curCategory,
  updateCurCategory,
}: SkillCategoryTabsProps) => {
  return (
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
          updateCurCategory("");
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
              updateCurCategory(category.id);
            }}
          >
            {category.name}
          </Button>
        ))}
    </div>
  );
};

export default SkillCategoryTabs;
