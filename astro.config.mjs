import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

export default defineConfig({
  integrations: [tailwind()],
});