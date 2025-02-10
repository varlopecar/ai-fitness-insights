import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import commonEn from "../locales/en/common.json"
import commonEs from "../locales/es/common.json"

export const resources = {
  en: { common: commonEn },
  es: { common: commonEs },
}

export const languageNames = {
  en: "English",
  es: "Español",
}

const options = {
  order: ["navigator"],
}

const __DEV__ = process.env.NODE_ENV !== "production"

i18n.use(initReactI18next).init({
  detection: options.order,
  resources,
  ns: ["common"],
  defaultNS: "common",
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  interpolation: {
    escapeValue: false,
  },
  debug: __DEV__,
})

export default i18n

