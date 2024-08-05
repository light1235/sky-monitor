export const getAllStaticRoutes = async () => {
     return [
          '/',
          '/services',
          '/projects',
          '/contacts',
          '/partners',
          '/privacy-policy',
          '/about-us',
          '/affiliate',
          '/faq',
          '/support',
          '/rules',
          '/sign-up',
          '/login',
          '/reset',
          '/listing-advertising',
          '/banner-advertising',
          '/pop-up-advertising',
          '/listing-pin',
          '/listing-raise',
          '/pin-project',
     ];
};


export const getAllDynamicRoutes = async () => {

     const response = await fetch(`https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/articleData.json`);
     const data = await response.json();

     return data.map(item => `/projects/${item.slug}`);
};
