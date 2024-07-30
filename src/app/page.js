"use client"
import Image from "next/image";
import { Carousel } from 'antd';
import React from 'react';
import HeroBanner from '/src/assets/main/images/head-b-8.jpg';
import HeroBanner1 from '/src/assets/main/images/head-b-9.jpg';
import './index.scss';
import BlockSlat from "@/components/main/block_slat";
import Info_block from "@/components/main/info_block";
import Information_line from "@/components/main/information_line";
import topProjectLogo from '/src/assets/main/icons/top-projects-block-logo.svg';
import newListingLogo from '/src/assets/main/icons/leaf.svg';
import scamIcon from '/src/assets/main/icons/scam-icon.svg';
import NewsLine from "@/components/main/news_line";
import NewsLineLogo from '/src/assets/main/icons/news-line-logo.svg';
import Link from "next/link";
import MainTabs from "@/components/main/main-tabs";
import {useGetListingsQuery} from "@/services/listingApi";


export default function Home() {

     const { data =[], error, isLoading } = useGetListingsQuery(undefined, {
          pollingInterval: 60000,
          refetchOnMountOrArgChange: true,
          refetchOnReconnect: true,
     });

     const items = [...data].reverse().slice(0,4);

     const filteredArrayScam = data.filter(obj => obj.category === 'scam');
     const filteredArrayScamSlice = filteredArrayScam.reverse().slice(0,4);


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
     let mpt= true

     return (
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
                   <BlockSlat text={'TOP Projects'}/>
                   <Info_block>
                        <Information_line domains="Bitmugnet.ro" image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                        <Information_line image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                        <Information_line image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                        <Information_line image={<Image src={topProjectLogo} alt="chart icon" height={29}></Image>} />
                   </Info_block>
                   <BlockSlat text={'New Listings'}/>
                   <Info_block>
                        {items.map((item,index) =>
                             <Information_line key={index} items={item} scam={false} image={<Image src={newListingLogo}  alt="leaf icon" height={29}></Image>} />
                        )}
                   </Info_block>
              </div>
              <div className="content__item">
                   <MainTabs />
              </div>
              <div className="content__item item--bottom">
                   <BlockSlat text={'Latest Hyip News'}/>
                   <Info_block>
                        <NewsLine dora={true} image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                        <NewsLine image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                        <NewsLine image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                        <NewsLine image={<Image src={NewsLineLogo} alt="fire icon" height={29}></Image>} />
                   </Info_block>
                   <BlockSlat text={'Latest Scams'}/>
                   <Info_block>
                        {filteredArrayScamSlice.map(( itemScam,index) =>
                             <Information_line  scam={true} items={itemScam} key={index} image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>} />
                        )}
                        {/*{filteredArrayScam.map((item, index)=>*/}
                        {/*     <Information_line key={index} scam={'true'} image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>} />*/}
                        {/*)}*/}

                        <Information_line   image={<Image src={scamIcon} alt="alert icon" height={29}></Image>} />
                        <Information_line image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>} />
                        <Information_line image={<Image src={scamIcon}  alt="alert icon" height={29}></Image>}/>
                   </Info_block>
              </div>
         </section>

    </main>
  );
}
