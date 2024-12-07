import { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  access: {
    read: () => true,
  },
  labels: {
    singular: "Experience",
    plural: "Experiences",
  },
  admin: {
    useAsTitle: "company_name",
    group: "Profile",
  },
  fields: [
    {
      name: "company_name",
      label: "Company Name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      label: "Role",
      type: "text",
      required: true,
    },
    {
      name: "start_date",
      label: "Start Date",
      type: "date",
      defaultValue: Date.now(),
      required: true,
    },
    {
      name: "is_current",
      label: "Are you currently working here?",
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
      name: "company_logo",
      label: "Company Logo",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      required: false,
    },
  ],
};
