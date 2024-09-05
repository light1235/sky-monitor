import React from 'react';
import './index.scss'
import Image from "next/image";
import contactPageImage from '/src/assets/main/images/contanct-page.svg'
import {useTranslations} from 'next-intl';

// export const metadata = {
//      title: 'Sky Finance - Expert in investments',
//      description: 'Reach out to us for personalized financial guidance and assistance',
// };
export async function generateMetadata({ params }) {
     const locale = params?.locale || 'en';

     const title = locale === 'ru' ? 'Добро пожаловать на наш сайт' : 'Sky Finance - Expert in investments';
     const description = locale === 'ru' ? 'Это главная страница на русском языке' : 'Reach out to us for personalized financial guidance and assistance';

     return {
          title,
          description,
          alternates: {
               canonical: locale === 'ru' ? 'https://example.com/ru' : 'https://example.com/en',
               languages: {
                    'ru': 'https://example.com/ru',
                    'en': 'https://example.com/en',
               },
          },
     };
}


const Contacts = () => {
     const t = useTranslations();
     return (
               <section className="contact__page">
                    <div className="contact__page-container">
                         <div className="contact__page-content">
                              <h1>Support@sky-finance.com</h1>
                              <h2>{t('Contact.title')}</h2>
                              <Image src={contactPageImage} alt='contact image'/>
                         </div>
                    </div>
               </section>
     );
};

export default Contacts;
