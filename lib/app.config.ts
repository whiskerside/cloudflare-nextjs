export const appConfig = {
  i18n: {
    locales: ["en", "cn"] as const,
    defaultLocale: "en" as const,
    localeLabels: {
      en: "English",
      cn: "简体中文",
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
  navigations: [
    // the attribute [label] should be mapping with i18n definition key under the
    // namesapce navigations
    {
      label: "home",
      href: "/",
      trigger: false,
      hasMore: false,
    },
    {
      label: "category",
      href: "/category",
      trigger: true,
      hasMore: true,
      childs: [
        {
          label: "analytics",
          href: "analytics",
          trigger: false,
          hasMore: false,
          description: "Tools for tracking and analyzing website data.",
        },
        {
          label: "database",
          href: "database",
          trigger: false,
          hasMore: false,
          description: "Services for storing and managing data.",
        },
        {
          label: "deployment",
          href: "deployment",
          trigger: false,
          hasMore: false,
          description: "Tools for automating application deployment.",
        },
      ],
    },
    {
      label: "changeLog",
      href: "/changelog",
      trigger: false,
      hasMore: false,
    },
  ],
};
