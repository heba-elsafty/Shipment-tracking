import i18n from "i18next";
import { FALLBACK_LANGUAGE } from "./constants";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import moment from "moment";
import "moment/locale/ar";

// EN
import translationEN from "./locales/en/translation.json";
import shipmentTrackingEN from "./locales/en/shipmentTracking.json";

// AR
import translationAR from "./locales/ar/translation.json";
import shipmentTrackingAR from "./locales/ar/shipmentTracking.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
    shipmentTracking: shipmentTrackingEN,
  },

  ar: {
    translation: translationAR,
    shipmentTracking: shipmentTrackingAR,
  },
};

  const setDocumentLang = (lng: any) => {
    const direction = (lng === "ar" ? "rtl" : "ltr");
    const htmlTag = document.querySelector("html") as HTMLElement;

    // assign multiple attributes at once to an <html> tag
    Object.assign(htmlTag, { lang: lng, id: lng, dir: direction });
  };

  i18n
  .on("languageChanged", (lng) => {
     setDocumentLang(lng)
     moment.locale(lng)
  });

  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: FALLBACK_LANGUAGE,
    supportedLngs: ["en", "ar"],
    interpolation: {
      escapeValue: false,
    },
    load: "languageOnly"
  });