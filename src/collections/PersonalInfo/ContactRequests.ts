import { CollectionConfig } from "payload";

export const ContactRequests: CollectionConfig = {
  slug: "contact-requests",
  access: {
    read: () => true,
    create: () => true,
  },
  labels: {
    singular: "Contact Request",
    plural: "Contact Requests",
  },
  admin: {
    group: "Messages",
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "richText",
      required: true,
    },
  ],
};
