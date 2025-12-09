import { en } from './en';
import { es } from './es';
import { ca } from './ca';

export const translations = {
  ca,
  en,
  es,
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language] || translations.ca;
  
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && value[fallbackKey]) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key if translation not found
        }
      }
      break;
    }
  }
  
  return value;
};

export const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ca', name: 'Català' }
]; 