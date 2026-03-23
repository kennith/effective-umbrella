import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rock Cycle",
  description: "A Science Project by Carissa",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    // { text: "Home", link: "/" },
    // { text: "Examples", link: "/markdown-examples" },
    // ],

    // sidebar: [
    // {
    //   text: "Examples",
    //   items: [
    //     { text: "Markdown Examples", link: "/markdown-examples" },
    //     { text: "Runtime API Examples", link: "/api-examples" },
    //   ],
    // },
    // ],

    socialLinks: [],
  },
  base: "/science-project/",
});
