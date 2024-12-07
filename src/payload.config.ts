// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Media } from "./collections/Media";
import { AboutMe } from "./collections/Profile/AboutMe";
import { Users } from "./collections/Users";
import { Projects } from "./collections/Profile/Projects";
import { SkillCategories } from "./collections/Profile/SkillCategories";
import { Skills } from "./collections/Profile/Skills";
import { Experiences } from "./collections/Profile/Experiences";
import { Educations } from "./collections/Profile/Educations";
import { ContactRequests } from "./collections/Messages/ContactRequests";

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
    Educations,
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
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
