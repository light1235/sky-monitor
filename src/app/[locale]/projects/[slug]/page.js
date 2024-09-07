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
               site_name: 'Sky Finance',
               images: [
                    {
                         url: 'https://cdn.discordapp.com/attachments/1238847881511829576/1253852834747650119/5dcd4b4694ef4baf9a6c13dcecaa3e52.pngtplv-6bxrjdptv7-image.png?ex=66dd8933&is=66dc37b3&hm=995755e862185c2707b498b0bc49c40fdfc4de0207c8f4498a1d0cdcc13af1f4&',
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
