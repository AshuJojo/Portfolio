import { CollectionConfig } from "payload";

export const Skills: CollectionConfig = {
  slug: "skills",
  access: {
    read: () => true,
  },
  admin: {
    group: "Personal Info",
    useAsTitle: 'skill'
  },
  labels: {
    singular: "Skill",
    plural: "Skills",
  },
  fields: [
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: 'skill-categories',
      hasMany: true
    },
    {
      name: "skill",
      label: "Skill",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      label: "Icon",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: {
          contains: "image",
        },
      },
      required: true,
    },
  ],
};
