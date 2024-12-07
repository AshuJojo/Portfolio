import { CollectionConfig } from "payload";

export const Educations: CollectionConfig = {
  slug: "educations",
  access: {
    read: () => true,
  },
  labels: {
    singular: "Education",
    plural: "Educations",
  },
  admin: {
    group: "Profile",
    useAsTitle: "institute_name",
  },
  fields: [
    {
      name: "institute_name",
      label: "Institute Name",
      type: "text",
      required: true,
    },
    {
      name: "degree",
      label: "Degree",
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
      label: "Are you currently studying here?",
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
      name: "institute_logo",
      label: "Institute Logo",
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
