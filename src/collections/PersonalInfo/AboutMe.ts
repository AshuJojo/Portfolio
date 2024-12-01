import type { CollectionConfig } from "payload";

export const AboutMe: CollectionConfig = {
  slug: "aboutme",
  access: {
    read: () => true,
  },
  admin: {
    group: "Personal Info",
  },
  labels: {
    plural: "About Me",
    singular: "About Me",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
