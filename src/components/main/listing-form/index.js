"use client"
import React, {useState} from 'react';
import  './index.scss';
import {Button, message, Radio, Steps, theme, Select, Space} from 'antd';
import ListingHeader from '../../../assets/main/images/listing-header.jpg';
import Image from 'next/image'
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontSelect from "@/components/main/custom_front_select";
import CustomFrontUpload from "@/components/main/custom_front_upload";
import BitcoinImage from '../../../assets/main/icons/payments-system/bitcoin.svg';
import AdvCashImage from '../../../assets/main/icons/payments-system/adv-cash.svg';
import BnBImage from '../../../assets/main/icons/payments-system/bnb.svg';
import DogeCoinImage from '../../../assets/main/icons/payments-system/dodge-coin.svg';
import EthImage from '../../../assets/main/icons/payments-system/eth.svg';
import LiteCoinImage from '../../../assets/main/icons/payments-system/lite-coin.svg';
import NetellerImage from '../../../assets/main/icons/payments-system/neteller.svg';
import PayoneerImage from '../../../assets/main/icons/payments-system/payoneer.svg';
import PayPallImage from '../../../assets/main/icons/payments-system/pay-pall.svg';
import PayzaImage from '../../../assets/main/icons/payments-system/payza.svg';
import PerfectImage from '../../../assets/main/icons/payments-system/perfect-money.svg';
import RippleImage from '../../../assets/main/icons/payments-system/ripple.svg';
import SkrillImage from '../../../assets/main/icons/payments-system/skrill.svg';
import TetherImage from '../../../assets/main/icons/payments-system/tether.svg';
import TronImage from '../../../assets/main/icons/payments-system/tron-trx.svg';
import WebmoneyImage from '../../../assets/main/icons/payments-system/web-money.svg';
import CustomTextArea from "@/components/main/cutom-text-area";
import CustomFrontButton from "@/components/main/cutom_front_button";

const ListingForm = () => {

     const [premiumBanner, setPremiumBanner] = useState(false);
     const options = [
          { value: '1',label: (
                    <>
                         <div className="select-inner" style={{display:'grid', gridTemplateColumns:'min-content min-content', alignItems:'center', gridGap:'5px'}}><Image src={BitcoinImage} alt={'bitcoin'} /> Bitcoin</div>
                    </>
               ), },
          { value: '2',label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image src={AdvCashImage} alt={'bitcoin'}/> AdvCash
                         </div>
                    </>
               ),
          },
          {
               value: '3', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image width={15} src={BnBImage} alt={'bitcoin'}/> BnB
                         </div>
                    </>
               ),
          },
          {
               value: '4', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image width={15} src={DogeCoinImage} alt={'bitcoin'}/> DogeCoin
                         </div>
                    </>
               ),
          },
          {
               value: '5', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image width={15} src={EthImage} alt={'bitcoin'}/> Eth
                         </div>
                    </>
               ),
          },
          {
               value: '6', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image width={15} src={LiteCoinImage} alt={'bitcoin'}/> LiteCoin
                         </div>
                    </>
               ),
          },
          {
               value: '7', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={NetellerImage} alt={'bitcoin'}/> Neteller
                         </div>
                    </>
               ),
          },
          {
               value: '8', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={PerfectImage} alt={'bitcoin'}/> PerfectMoney
                         </div>
                    </>
               ),
          },
          {
               value: '9', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={PayoneerImage} alt={'bitcoin'}/> Payoneer
                         </div>
                    </>
               ),
          },
          {
               value: '10', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={PayPallImage} alt={'bitcoin'}/> PayPall
                         </div>
                    </>
               ),
          },
          {
               value: '11', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={PayzaImage} alt={'bitcoin'}/> Payza
                         </div>
                    </>
               ),
          },
          {
               value: '12', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={RippleImage} alt={'bitcoin'}/> Ripple
                         </div>
                    </>
               ),
          },
          {
               value: '13', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={SkrillImage} alt={'bitcoin'}/> Skrill
                         </div>
                    </>
               ),
          },
          {
               value: '14', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={TetherImage} alt={'bitcoin'}/> Tether
                         </div>
                    </>
               ),
          },
          {
               value: '15', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={TronImage} alt={'bitcoin'}/> Tron
                         </div>
                    </>
               ),
          },
          {
               value: '16', label: (
                    <>
                         <div className="select-inner" style={{
                              display: 'grid',
                              gridTemplateColumns: 'min-content min-content',
                              alignItems: 'center',
                              gridGap: '5px'
                         }}><Image  width={15} src={WebmoneyImage} alt={'bitcoin'}/> WebMoney
                         </div>
                    </>
               ),
          },
     ];

     const handleChange = (value) => {
          console.log(`Selected: ${value}`);
          setPremiumBanner(value);
     };

     let selectPeriod = [
          {value: '1', label: 'Premium' },
          { value: '2', label: 'Trial' },
          { value: '3', label: 'Normal' },
          { value: '4', label: 'Exclusive' },
          { value: '5', label: 'Elite' },
     ]

     const [value, setValue] = useState(1);
     const onChange = (e) => {
          console.log('radio checked', e.target.value);
          setValue(e.target.value);
     };

     const steps = [
          {
               title: 'Listing',
               content: (
                    <div className="listing-content-1 listing-content">
                         <div className="listing-block">

                              <Space direction="horizontal" size="middle" style={{marginBottom:'20px'}}>
                                   <label>
                                        <p style={{color:'#5B5BDF'}}>Contact Email*</p>
                                        <CustomFrontInput placeholder={'Enter your email'}/>
                                   </label>

                                   <label>
                                        <p style={{color:'#5B5BDF'}}>Pricing Plan</p>
                                        <CustomFrontSelect onSelect={handleChange} placeholder="Schoose listing" Data={selectPeriod}/>
                                   </label>
                              </Space>
                              <label>
                                   <p>Program name</p>
                                   <CustomFrontInput placeholder={'Enter  name'}/>
                              </label>
                              <label>
                                   <p>Start Date</p>
                                   <CustomFrontInput placeholder={'Enter date'}/>
                              </label>
                              <label>
                                   <p>Minimal Spend</p>
                                   <CustomFrontInput placeholder={'Enter the number'}/>
                              </label>
                         </div>
                         <div className="listing-block">
                              <p>Listing Image - 125x125px</p>
                              <CustomFrontUpload/>
                              <label>
                                   <p>Withdraw type</p>
                                   <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={1}>Manual</Radio>
                                        <Radio value={2}>Instant</Radio>
                                        <Radio value={3}>Auto</Radio>
                                   </Radio.Group>
                              </label>
                              <label>
                                   <p>Payments Method</p>
                                   <Select
                                        mode="tags"
                                        size={'middle'}
                                        placeholder="Please select"
                                        onChange={handleChange}
                                        style={{
                                             width: '100%',
                                        }}
                                        options={options}
                                   />
                              </label>
                              <div className="banner-wrapper">
                                   <div>
                                        <p>Listing Banner<br/>615х90px</p>
                                        <CustomFrontUpload/>
                                   </div>
                                   {(premiumBanner === '1' || premiumBanner === '4' || premiumBanner === '5') && (
                                        <div>
                                             <p>Header Banner<br/>370x170px</p>
                                             <CustomFrontUpload/>
                                        </div>
                                   )}

                              </div>
                         </div>
                         <div className="listing-block">
                         <label>
                                   <p>Project Link</p>
                                   <CustomFrontInput placeholder={'Enter your link'}/>
                              </label>
                              <label>
                                   <p>Investment Direction</p>
                                   <CustomFrontInput placeholder={'Enter your direction'}/>
                              </label>

                              <label>
                                   <p>Invested plans</p>
                                   {/*<CustomFrontInput placeholder={'Enter  plans of your project'}/>*/}
                                   <CustomTextArea placeholder={'Enter  plans of your project'} minR={2} maxR={3} max={67} />
                              </label>
                         </div>
                    </div>
               )
          },
          {
               title: 'Project',
               content: (
                    <div className="listing-content-2 listing-content">
                         <div className="listing-block">
                              <label>
                                   <p>Article Name*</p>
                                   <CustomFrontInput placeholder={'Enter article name'}/>
                              </label>
                              <label>
                                   <p>Start Project*</p>
                                   <CustomFrontInput placeholder={'Enter project date'}/>
                              </label>
                              <label>
                                   <p>Yield*</p>
                                   <CustomFrontInput placeholder={'Enter income'}/>
                              </label>
                              <label>
                                   <p>Investment Period*</p>
                                   <CustomFrontInput placeholder={'Enter project name'}/>
                              </label>
                         </div>
                         <div className="listing-block">
                              <p>Project Image - Aspect Ratio 16:9</p>
                              <CustomFrontUpload/>
                              <label>
                                   <p>Min deposit amount</p>
                                   <CustomFrontInput placeholder={'Enter Amount'}/>
                              </label>
                              <label>
                                   <p>Ref Back</p>
                                   <CustomFrontInput placeholder={'Enter ref back'}/>
                              </label>
                         </div>
                         <div className="listing-block">

                              <label>
                                   <p>Invested plans</p>
                                   <CustomTextArea placeholder={'Enter your plans'}/>
                              </label>
                              <label>
                                   <p>Project Description</p>
                                   <CustomTextArea placeholder={'Enter project description'} minR={6}/>
                              </label>
                         </div>
                    </div>
               )

          },
          {
               title: 'Preview',
               content: (
                    <div className="listing-content-3 listing-content">
                         <div className="listing-block">
                              <label>
                                   <p>Name*</p>
                                   <CustomFrontInput placeholder={'Enter project name'}/>
                              </label>
                              <label>
                                   <p>Preview Description</p>
                                   <CustomTextArea placeholder={'Enter preview description'} minR={6}/>
                              </label>
                              <label>
                                   <p>Tags</p>
                                   <CustomFrontInput placeholder={'Enter project tags'}/>
                              </label>
                         </div>
                    </div>
               )

          },
          {
               title: 'Payments',
               content: (
                    <div className="listing-content-4 listing-content">
                         <CustomFrontButton name={'Move to payment'} />
                    </div>
               )
          },
     ];

     const {token} = theme.useToken();
     const [current, setCurrent] = useState(0);
     const next = () => {
          setCurrent(current + 1);
     };
     const prev = () => {
          setCurrent(current - 1);
     };
     const items = steps.map((item) => ({
          key: item.title,
          title: item.title,
     }));
     const contentStyle = {
          lineHeight: '20px',
          padding: '20px 0',
          color: token.colorTextTertiary,
          // backgroundColor:'#f2f2f2',
          borderRadius: token.borderRadiusLG,
          border: `none`,
          marginTop: 16,
     };


     return (
          <div className="listing-pop-up">
             <div className="wrap-bg">
                  <Image priority={true} width="auto" height="auto" src={ListingHeader}  alt={'background'}/>
             </div>
          <div className="step-table listing-table">
               <h2>Listing</h2>
               <h3>Leave your mark in space!</h3>
               <Steps current={current} items={items}/>
               <div style={contentStyle}>{steps[current].content}</div>
               <div className="button-wrap"
                    style={{
                         marginTop: 24,
                    }}
               >
                    {current > 0 && (
                         <Button type="primary"
                              onClick={() => prev()}
                         >
                              Previous
                         </Button>
                    )}
                    {current < steps.length - 1 && (
                         <Button type="primary" onClick={() => next()}>
                              Next
                         </Button>


                    )}
                    {current === steps.length - 1 && (
                         <Button type="primary" onClick={() => message.success('Processing complete!')}>
                              Submit
                         </Button>
                    )}

               </div>
          </div>
          </div>
     );
};

export default ListingForm;
