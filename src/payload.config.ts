// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { Media } from "./collections/Media";
import { ContactRequests } from "./collections/Messages/ContactRequests";
import { AboutMe } from "./collections/Profile/AboutMe";
import { Experiences } from "./collections/Profile/Experiences";
import { Projects } from "./collections/Profile/Projects";
import { SkillCategories } from "./collections/Profile/SkillCategories";
import { Skills } from "./collections/Profile/Skills";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    AboutMe,
    Projects,
    SkillCategories,
    Skills,
    Experiences,
    ContactRequests,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
    autoPluralization: false,
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],
});
