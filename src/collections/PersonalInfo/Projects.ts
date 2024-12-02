import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  admin: {
    group: "Personal Info",
  },
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "screenshots",
      label: "Screenshots",
      type: "array",
      fields: [
        {
          name: "screenshot",
          label: "Screenshot",
          type: "upload",
          relationTo: "media",
          filterOptions: {
            mimeType: {
              contains: "image",
            },
          },
        },
        {
          name: "alt",
          label: "Alt",
          type: "text",
          required: true,
        },
      ],

      required: false,
    },
    {
      name: "live_url",
      label: "Live URL",
      type: "text",
      required: false,
    },
    {
      name: "github_url",
      label: "Github URL",
      type: "text",
      required: false,
    },
    {
      name: "start_date",
      label: "Start Date",
      type: "date",
      defaultValue: Date.now(),
      required: true,
    },
    {
      name: "in_progress",
      label: "Is Currently In Progress?",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "end_date",
      label: "End Date",
      type: "date",
      defaultValue: (data: { in_progress: boolean }) => {
        return data.in_progress ? "" : Date.now();
      },
      admin: {
        condition: (data) => {
          return !data.in_progress;
        },
      },
      required: false,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      required: true,
    },
  ],
};
