import React from 'react';
import ArticlePage from "@/components/main/simple-article";
import NewsArticle from "@/components/main/news-article";
import AdvancedArticle from "@/components/main/advanced-article";
import getData from "@/services/projectApi";

// export const metadata = {
//      title: 'Sky Finance - Expert in investments',
//      description: 'Explore our curated selection of tracked investment ventures for informed decision-making',
// };


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
