import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
});
