import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './message/en.json'
import frTranslation from './message/fr.json'
import arTranslation from './message/ar.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translation: enTranslation,
          },
          fr: {
            translation: frTranslation,
          },
          ar: {
            translation: arTranslation,
          },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
