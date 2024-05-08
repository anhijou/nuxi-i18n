// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-primevue', '@nuxtjs/i18n','@nuxt/ui','@nuxtjs/tailwindcss'],
  i18n:{
    lazy:true,
    langDir:'locales',
    strategy:'prefix_except_default',
    locales:[
      {
        code:'en-US',
        iso: 'en-US',
        name:'English(US)',
        dir: 'ltr', 
        file:'en-US.json'
      },
      {
        code:'es-ES',
        iso: 'es-ES',
        name:'Español',
        dir: 'ltr', 
        file:'es-ES.json'
      },
      {
        code: "ar-SA",
        iso: "ar-SA",
        name: "العربية",
        dir: 'rtl', 
        file: "ar-SA.json"
       }
    ],
       defaultLocale:"en-US",
      
      
  },
css: ['primevue/resources/themes/aura-light-green/theme.css'],

  devtools: { enabled: true }
})