import { getLocales } from "expo-localization";
import { I18n } from "i18n-js"; // Correct import from i18n-js
import en from "./locales/en.json";
import es from "./locales/es.json";

// Set the translations
const translations = {
  en,
  es,
};

// Initialize i18n
const i18n = new I18n(translations); // Correctly instantiate I18n

// Set the locale once at the beginning of your app
i18n.locale = getLocales()[0].languageCode;

// Enable fallback (use another language's key if translation is missing)
i18n.enableFallback = true;

// Log a translation to verify setup
console.log(i18n.t("welcome"));

// To see the fallback mechanism uncomment the line below to force the app to use the Spanish language.
//i18n.locale = "es";

export default i18n;
