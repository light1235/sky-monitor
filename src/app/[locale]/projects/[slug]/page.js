import React from 'react';
import ArticlePage from "@/components/main/simple-article";
import NewsArticle from "@/components/main/news-article";
import AdvancedArticle from "@/components/main/advanced-article";
import getData from "@/services/projectApi";


export async function generateMetadata({ params }) {
     const locale = params?.locale || 'en';

     const title = locale === 'ru' ? 'Добро пожаловать на наш сайт' : 'Sky Finance - Expert in investments';
     const description = locale === 'ru' ? 'Это главная страница на русском языке' : 'Guiding Your Wealth Journey with Expertise and Insight';

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
                    openGraph: {
               title:'dora',
               site_name: 'Sky Finance',
               images: [
                    {
                         url: 'https://sky-monitor-five.vercel.app/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F1276295653558976594%2F1276295885654855813%2F087735f272c94962813fcd1eeea01c1c.pngtplv-6bxrjdptv7-image.png%3Fex%3D66c902ab%26is%3D66c7b12b%26hm%3D6d7bb6bcb73c581c3546ef524972e724cf733dc06cb383d1e4095a49213d9c56%26&w=1080&q=75',
                         width: 1200,
                         height: 630,
                         alt: 'Sky Finance Logo',
                    }
               ],
               type: 'website',
          }
     };
}
const PostComp = async ({params}) => {
     const projects = await getData();
     const {slug} = params;

     const filteredData = projects.filter(post => post.slug.replace(/\s+/g, '-') === slug);

     return (
          <div>

               {filteredData.map(post => {
                    if (post.article.articleType.simpleArticle) {
                         return <ArticlePage post={post} key={post.id} />;
                    } else if (post.article.articleType.additionalArticle) {
                         return <AdvancedArticle post={post} key={post.id} />;
                    } else if (post.article.articleType.news) {
                         return <NewsArticle post={post} key={post.id} />;
                    } else {
                         return null;
                    }
               })}

          </div>
     );
};

export default PostComp;
