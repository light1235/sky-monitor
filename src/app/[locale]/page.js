import Image from "next/image";
import { Carousel } from 'antd';
import React from 'react';
import HeroBanner from '/src/assets/main/images/head-b-8.jpg';
import HeroBanner1 from '/src/assets/main/images/head-b-9.jpg';
import '../index.scss';
import BlockSlat from "@/components/main/block_slat";
import Info_block from "@/components/main/info_block";
import Information_line from "@/components/main/information_line";
import topProjectLogo from '/src/assets/main/icons/topIconNew.svg';
import newListingLogo from '/src/assets/main/icons/listingIconNew.svg';
import scamIcon from '/src/assets/main/icons/scamIconNew.svg';
import NewsLine from "@/components/main/news_line";
import NewsLineLogo from '/src/assets/main/icons/newsIconNew.svg';
import Link from "next/link";
import MainTabs from "@/components/main/main-tabs";
import getData  from "../../services/projectApi";
import getListing from '../../services/listingApi'
import HidenTegs from "@/components/main/hiden-tegs";
// export const metadata = {
//      title: 'Sky Finance - Expert in investments',
//      description: "Guiding Your Wealth Journey with Expertise and Insight",
// };

export async function generateMetadata({ params }) {
     const locale = params?.locale || 'en';

     const title = locale === 'ru' ? 'Добро пожаловать на наш сайт' : 'Sky Finance - Expert in investments';
     const description = locale === 'ru' ? 'Это главная страница на русском языке' : 'Guiding Your Wealth Journey with Expertise and Insight';

     return {
          title,
          description,
          alternates: {
               canonical: locale === 'ru' ? 'https://example.com/ru' : 'https://example.com/en',
               // languages: {
               //      'ru': 'https://example.com/ru',
               //      'en': 'https://example.com/en',
               // },
          },
     };
}

const Home = async () => {

     let listings = await getListing();
     const projects = await getData();

     const items = [...listings].reverse().slice(0,4);

     const filteredArrayScam = listings.filter(obj => obj.category === 'scam');
     const filteredArrayPremium = listings.filter(obj => obj.category === 'premium');

     const filteredArrayScamSlice = filteredArrayScam.reverse().slice(0,4);
     const filteredArrayPremiumSlice = filteredArrayPremium.reverse().slice(0,4);

     const filteredArrayNews  = projects.filter(obj => obj.article.articleType.news === true);
     const filteredArrayNewsSlice = filteredArrayNews.reverse().slice(0,4);
     // console.log(filteredArrayScam);

     // const [windowWidth, setWindowWidth] = useState(600);
     // const [showSlider, setShowSlider] = useState(true);
     //
     //
     // useEffect(() => {
     //
     //      if (windowWidth => 768) {
     //          setShowSlider(false)
     //      } else {
     //           setShowSlider(true)
     //      }
     //      setWindowWidth(window.innerWidth)
     // }, [windowWidth]);
     // showSlider ? 1 : 3


     return (
          <>
    <main style={{background:'#F4F6F7'}}>
         <section className="hero-banner">
              <React.Suspense>
                   <Carousel  autoplay  slidesToShow={3} responsive={[
                        {
                             breakpoint: 768,
                             settings: {
                                  slidesToShow: 1,
                             },
                        },
                   ]}>
                        <div style={{display:"grid"}} aria-hidden="true">
                             <Link rel="nofollow" target="_blank" href='/' aria-label="program banner" aria-hidden="true">
                                  <Image src={HeroBanner} priority width="369" height="170" alt="banner" aria-hidden="true"></Image>
                             </Link>
                        </div>
                        <div aria-hidden="true">
                             <Link rel="nofollow" target="_blank" href='/' aria-label="program banner" aria-hidden="true">
                                  <Image src={HeroBanner1} priority width="369" height="170" alt="banner"></Image>
                             </Link>
                        </div>
                        <div aria-hidden="true">
                             <Link rel="nofollow" target="_blank" href='/' aria-label="program banner" aria-hidden="true">
                                  <Image src={HeroBanner} priority width="369" height="170" alt="banner" aria-hidden="true"></Image>
                             </Link>
                        </div>
                        <div aria-hidden="true">
                             <Link  rel="nofollow" target="_blank" href='/' aria-label="program banner" aria-hidden="true">
                                  <Image src={HeroBanner1} priority width="369" height="170" alt="banner" aria-hidden="true"></Image>
                             </Link>
                        </div>
                   </Carousel>
              </React.Suspense>
         </section>
         <section className="main-content">
              <div className="content__item">
                   <BlockSlat text={'mainPage.blocks.top'}/>
                   <Info_block>
                        {filteredArrayPremiumSlice.map((itemsTop,index) =>
                             <Information_line key={index} items={itemsTop} scam={false} top={true} image={<Image src={topProjectLogo} alt="top-project__icon" height={29}></Image>} />
                        )}
                   </Info_block>
                   <BlockSlat text={'mainPage.blocks.new'}/>
                   <Info_block>
                        {items.map((item,index) =>
                             <Information_line key={index} items={item} scam={false} top={false} image={<Image src={newListingLogo}  alt="new-project__icon" height={29}></Image>} />
                        )}
                   </Info_block>
              </div>
              <div className="content__item">
                   <HidenTegs text={'Chartered financial advisor recommending the best investments, including crypto investments, to maximize dividends.'} />
                   <MainTabs dataListing={listings} />
              </div>
              <div className="content__item item--bottom">
                   <BlockSlat text={'mainPage.blocks.news'}/>
                   <Info_block>
                        {filteredArrayNewsSlice.map((item,index) =>
                             <NewsLine item={item} key={index} image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                        )}
                   </Info_block>
                   <BlockSlat text={'mainPage.blocks.scam'}/>
                   <Info_block>
                        {filteredArrayScamSlice.map(( itemScam,index) =>
                                 <Information_line  scam={true}  top={false} items={itemScam} key={index} image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>} />
                        )}
                   </Info_block>
              </div>
         </section>

    </main>
          </>
  );
}

export default Home;
