import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'

export const supportedLanguages = ['pt', 'en', 'es'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'pt',
    supportedLngs: supportedLanguages,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'jadoo-language',
    },
  })

// Keep <html lang> and the tab title/description in sync with whatever
// language i18next resolves to (persisted choice, browser default, or a
// manual switch), so assistive tech and the browser tab stay accurate.
function syncDocumentToLanguage(language: string) {
  document.documentElement.lang = language
  document.title = i18n.t('meta.title')

  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', i18n.t('meta.description'))
}

i18n.on('languageChanged', syncDocumentToLanguage)
if (i18n.isInitialized) {
  syncDocumentToLanguage(i18n.language)
} else {
  i18n.on('initialized', () => syncDocumentToLanguage(i18n.language))
}

export default i18n
