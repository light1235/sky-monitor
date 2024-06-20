import React from 'react';
import './index.scss'
import NewsStepper from "@/components/panel/news-stepper";
import AddBannerForm from "@/components/panel/add-banner-form";
import AddNewsForm from "@/components/panel/add-news-form";

const SupportPage = () => {
     return (
          <div className="support__page">
               {/*<NewsStepper />*/}
              <AddNewsForm />

          </div>
     );
};

export default SupportPage;
