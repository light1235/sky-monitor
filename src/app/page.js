import Image from "next/image";
import { Carousel } from 'antd';
import React from 'react';
import { Tabs } from 'antd';
import HeroBanner from '/src/assets/main/images/hero-banner-1.jpg';
import testBanner from '/src/assets/main/images/122.jpg';
import './index.scss';
import BlockSlat from "@/components/main/block_slat";
import Info_block from "@/components/main/info_block";
import Information_line from "@/components/main/information_line";
import topProjectLogo from '/src/assets/main/icons/top-projects-block-logo.svg';
import newListingLogo from '/src/assets/main/icons/leaf.svg';
import scamIcon from '/src/assets/main/icons/scam-icon.svg';
import NewsLine from "@/components/main/news_line";
import NewsLineLogo from '/src/assets/main/icons/news-line-logo.svg';
import Listing_card from "@/components/main/listing_card";
import Link from "next/link";
import Listing_card_mobile from "@/components/main/listing_card_mobile";
import ListingCardThin from "@/components/main/listing_card-thin";

export default function Home() {

  return (
    <main style={{background:'#F4F6F7'}}>
         <section className="hero-banner">
              <Carousel autoplay slidesToShow={3} draggable >
                   <div style={{display:"grid"}}>
                        <Link target="_blank" href='/'>
                       <Image src={HeroBanner} alt="banner"></Image>
                        </Link>
                   </div>
                   <div>
                        <Link target="_blank" href='/'>
                        <Image src={testBanner} width="369" height="170" alt="banner"></Image>
                        </Link>
                   </div>
                   <div>
                        <Link target="_blank" href='/'>
                        <Image src={HeroBanner}  alt="banner"></Image>
                        </Link>
                   </div>
                   <div>
                        <Link target="_blank" href='/'>
                        <Image src={HeroBanner}  alt="banner"></Image>
                        </Link>
                   </div>
              </Carousel>
         </section>
         <section className="main-content">
              <div className="content__item">
                   <BlockSlat text={'TOP Projects'}/>
                   <Info_block>
                        <Information_line image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                        <Information_line image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                        <Information_line image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                        <Information_line image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                   </Info_block>
                   <BlockSlat text={'New Listings'}/>
                   <Info_block>
                        <Information_line image={<Image src={newListingLogo}  alt="leaf icon" height={29}></Image>} />
                        <Information_line  image={<Image src={newListingLogo} alt="leaf icon" height={29}></Image>} />
                        <Information_line image={<Image src={newListingLogo}  alt="leaf icon" height={29}></Image>} />
                        <Information_line image={<Image src={newListingLogo}  alt="leaf icon" height={29}></Image>}/>
                   </Info_block>
              </div>
              <div className="content__item">
                   <Tabs
                        defaultActiveKey="1"
                        centered
                        items={[
                             {
                                  label: 'Overview',
                                  key: '1',
                                  children: <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}> <Listing_card/>  </div>,
                             },
                             {
                                  label: 'Premium',
                                  key: '2',
                                  children: <ListingCardThin/> ,
                             },
                             {
                                  label: 'Normal',
                                  key: '3',
                                  children:<Listing_card_mobile /> ,
                             },
                             {
                                  label: 'Trial',
                                  key: '4',
                                  children: <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}> <Listing_card/>  <ListingCardThin/> </div>,
                             },
                             {
                                  label: 'Scam',
                                  key: '5',
                                  children: 'tab5',
                             },
                        ]}
                   />
              </div>
              <div className="content__item">
                   <BlockSlat text={'Latest Hyip News'}/>
                   <Info_block>
                        <NewsLine image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                        <NewsLine image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                        <NewsLine image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                        <NewsLine image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                   </Info_block>
                   <BlockSlat text={'Latest Scams'}/>
                   <Info_block>
                        <Information_line image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>} />
                        <Information_line  image={<Image src={scamIcon} alt="alert icon" height={29}></Image>} />
                        <Information_line image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>} />
                        <Information_line image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>}/>
                   </Info_block>
              </div>
         </section>

    </main>
  );
}
