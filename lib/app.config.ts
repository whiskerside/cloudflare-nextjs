export const appConfig = {
  i18n: {
    locales: ["en", "zh"] as const,
    defaultLocale: "en" as const,
    localeLabels: {
      en: "English",
      zh: "简体中文",
    },
    localeDetection: false,
    localeCurrencies: {
      en: "USD",
      de: "USD",
      es: "USD",
    },
  },
  auth: {
    oAuthProviders: ["google", "github"],
  },
};
