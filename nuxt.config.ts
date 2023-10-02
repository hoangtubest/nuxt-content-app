// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
        sepia: "monokai",
      },
    },
  },
  router: {
    base: process.env.NODE_ENV === "production" ? "/nuxt-content-app/" : "/",
  },
});
