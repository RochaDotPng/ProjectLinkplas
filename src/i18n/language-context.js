import { createContext, useContext } from 'react';
import { DEFAULT_LANGUAGE } from './languages';

export const LanguageContext = createContext(DEFAULT_LANGUAGE);

export function useLanguage() {
  return useContext(LanguageContext);
}
