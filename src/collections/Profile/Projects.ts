import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  admin: {
    group: "Profile",
    useAsTitle: "title",
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
      name: "thumbnail",
      label: "Thumbnail",
      type: "upload",
      relationTo: "media",
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
      name: "short_description",
      label: "Short Description",
      type: "textarea",
      required: true,
    },
  ],
};
