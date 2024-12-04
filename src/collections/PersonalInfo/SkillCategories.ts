import { CollectionConfig } from "payload";

export const SkillCategories: CollectionConfig = {
  slug: "skill-categories",
  access: {
    read: () => true,
  },
  admin: {
    group: "Personal Info",
  },
  labels: {
    singular: "Skill Category",
    plural: "Skill Categories",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
  ],
};
