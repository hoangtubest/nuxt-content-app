// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    highlight: {
      theme: "light-plus",
    },
  },
  router: {
    base: process.env.NODE_ENV === "production" ? "/nuxt-content-app/" : "/",
  },
});
