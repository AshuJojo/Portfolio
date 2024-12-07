import type { CollectionConfig } from "payload";

export const AboutMe: CollectionConfig = {
  slug: "aboutme",
  access: {
    read: () => true,
  },
  admin: {
    group: "Profile",
    useAsTitle: "name",
  },
  labels: {
    plural: "About Me",
    singular: "About Me",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      required: true,
    },
    {
      name: "profile_pic",
      label: "Profile Picture",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: { contains: "image" },
      },
      required: false,
    },
    {
      name: "resume",
      label: "Resume",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: {
          contains: "application/pdf",
        },
      },
      required: false,
    },
    {
      name: "social_links",
      label: "Social Links",
      type: "array",
      labels: {
        singular: "Social Link",
        plural: "Social Links",
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          required: true,
        },
        {
          name: "logo",
          label: "Logo",
          type: "upload",
          relationTo: "media",
          filterOptions: {
            mimeType: { contains: "image" },
          },
          required: true,
        },
      ],
      required: false,
    },
  ],
};
