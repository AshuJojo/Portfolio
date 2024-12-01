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
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
      required: true,
    },
    {
      name: "profile picture",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: {
          contains: "application/pdf",
        },
      },
    },
  ],
};
