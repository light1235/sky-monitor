// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import nextI18NextConfig from '../next-i18next.config';
import HttpBackend from 'i18next-http-backend';

const getInitialLanguage = () => {
     if (typeof window !== 'undefined') {
          return localStorage.getItem('i18nextLng') || 'en';
     }
     return 'en';
};

i18n
     .use(HttpBackend)
     .use(initReactI18next)
     .use(LanguageDetector)
     .init({
          ...nextI18NextConfig,
          // resources: {
          //      ess: {
          //           common: {
          //                header: {
          //                     button: "Добавить",
          //                     menu: {
          //                          menu1: "Мониторинг",
          //                          menu2: "Услуги",
          //                          menu3: "Проекты",
          //                          menu4: "Контакты",
          //                          menu5: "Партнеры",
          //                     },
          //                     login:"Авторизоваться",
          //                     register:"Зарегистрироваться",
          //                     langMenu:"RU",
          //                     loginMenu:{
          //                       dashboard:"Панель",
          //                       exit:"Выйти"
          //                     },
          //                     popUp:{
          //                          title:"выберите подходящую услугу",
          //                          description:"Выберите один из предложенных вариантов:",
          //                          listing:"Реклама",
          //                          banner:"Баннер",
          //                          popUp:"Окно",
          //                          pin:"Доп.Услуги",
          //                          article:"Статья"
          //                     },
          //                },
          //                footer: {
          //                     footerTop: {
          //                          navItem1: "Подписывайтесь",
          //                          navItem2: "Компания",
          //                          navItem3: "Информация",
          //                          navItem4: "Обслуживание клиентов",
          //                     },
          //                     footerMenu:{
          //                          about:"О нас",
          //                          affiliate:"Партнерская программа",
          //                          faq:"Часто задаваемые вопросы",
          //                          support:"Поддержка",
          //                          rules:"Правалиа",
          //                          register:"Регистрация",
          //                          login:"Авторизироваться",
          //                          reset:"Сбросить Аккаунт"
          //                     },
          //                     footerBottom:{
          //                          rights:"© 2024 Все права защищены",
          //                          privacy:"Политика конфиденциальности Условия и положения"
          //                     }
          //                },
          //                mainPage:{
          //                     blocks:{
          //                          top:"Лучшие проекты",
          //                          new:"Новые объявления",
          //                          news:"Последние новости Hyip",
          //                          scam:"Последние мошенничества",
          //                     },
          //                     tabs:{
          //                          tab1:"Обзор",
          //                          tab2:"Премиум",
          //                          tab3:"Нормальный",
          //                          tab4:"Пробный",
          //                          tab5:"Мошенники",
          //                     },
          //                     search:"поиск"
          //                }
          //           },
          //      },
          //      en: {
          //           common: {
          //                header: {
          //                     button: "Add program",
          //                     menu: {
          //                          menu1: "Monitoring",
          //                          menu2: "Services",
          //                          menu3: "Projects",
          //                          menu4: "Contacts",
          //                          menu5: "Partners",
          //                     },
          //                     login:"Login",
          //                     register:"Register",
          //                     langMenu:"EN",
          //                     loginMenu:{
          //                          dashboard:"Dashboard",
          //                          exit:"Logout"
          //                     },
          //                     popUp:{
          //                       title:"choose the appropriate service",
          //                       description:"Choose from the selected:",
          //                       listing:"Listing",
          //                       banner:"Banner",
          //                       popUp:"Pop-Up",
          //                       pin:"Pin&Raise",
          //                       article:"Article"
          //                     },
          //                },
          //                footer: {
          //                     footerTop: {
          //                          navItem1: "Follow us",
          //                          navItem2: "Company",
          //                          navItem3: "Info",
          //                          navItem4: "Customer Service",
          //                     },
          //                     footerMenu:{
          //                          about:"About Us",
          //                          affiliate:"Affiliate",
          //                          faq:"Faq",
          //                          support:"Support",
          //                          rules:"Rules",
          //                          register:"Registration",
          //                          login:"Login",
          //                          reset:"Reset Account"
          //                     },
          //                     footerBottom:{
          //                          rights:"© 2024 All Rights Reserved",
          //                          privacy:"Privacy Policy Terms & Conditions"
          //                     }
          //                },
          //                mainPage:{
          //                     blocks:{
          //                          top:"Top Projects",
          //                          new:"New Listings",
          //                          news:"Latest Hyip News",
          //                          scam:"Latest Scams",
          //                     },
          //                     tabs:{
          //                       tab1:"Overview",
          //                       tab2:"Premium",
          //                       tab3:"Normal",
          //                       tab4:"Trial",
          //                       tab5:"Scam",
          //                     },
          //                     search:"search"
          //                }
          //           },
          //      },
          // },
          lng: getInitialLanguage(),
          fallbackLng: 'en',
          detection: {
               order: ['localStorage', 'cookie', 'querystring', 'sessionStorage', 'navigator', 'htmlTag'],
               caches: ['localStorage'],
          },
          interpolation: {
               escapeValue: false,
          },
          backend: {
               loadPath: '/locales/{{lng}}/{{ns}}.json',
          },
     });

export default i18n;
