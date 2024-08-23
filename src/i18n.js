// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import nextI18NextConfig from '../next-i18next.config';

const getInitialLanguage = () => {
     if (typeof window !== 'undefined') {
          return localStorage.getItem('i18nextLng') || 'en';
     }
     return 'en'; // Значение по умолчанию, если localStorage недоступенs
};

i18n
     .use(initReactI18next)
     .use(LanguageDetector)
     .init({
          ...nextI18NextConfig,
          resources: {
               ess: {
                    common: {
                         header: {
                              button: "Добавить",
                              menu: {
                                   menu1: "Мониторинг",
                                   menu2: "Услуги",
                                   menu3: "Проекты",
                                   menu4: "Контакты",
                                   menu5: "Партнеры",
                              }
                         },
                         footer: {
                              footerTop: {
                                   navItem1: "Подписывайтесь",
                                   navItem2: "Компания",
                                   navItem3: "Информация",
                                   navItem4: "Обслуживание клиентов",
                              }
                         },
                    },
               },
               en: {
                    common: {
                         header: {
                              button: "Add program",
                              menu: {
                                   menu1: "Monitoring",
                                   menu2: "Services",
                                   menu3: "Projects",
                                   menu4: "Contacts",
                                   menu5: "Partners",
                              }
                         },
                         footer: {
                              footerTop: {
                                   navItem1: "Follow us",
                                   navItem2: "Company",
                                   navItem3: "Info",
                                   navItem4: "Customer Service",
                              }
                         },
                    },
               },
          },
          lng: getInitialLanguage(),
          fallbackLng: 'en',
          detection: {
               order: ['localStorage', 'cookie', 'querystring', 'sessionStorage', 'navigator', 'htmlTag'],
               caches: ['localStorage'],
          },
          interpolation: {
               escapeValue: false,
          },
     });

export default i18n;
