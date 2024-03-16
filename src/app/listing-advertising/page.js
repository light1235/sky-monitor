import React from 'react';
import './index.scss'
import starIcon from '/src/assets/main/icons/star-icon.svg';
import Image from "next/image";
import EliteImage from '/src/assets/main/images/elite.png';
import ExclusiveImage from '/src/assets/main/images/exclusive.png';
import PremiumImage from '/src/assets/main/images/premium.png';
import NormalImage from '/src/assets/main/images/normal.png';
import TrialImage from '/src/assets/main/images/trial.png';

const ListingPackages = () => {
     return (
          <section className="listing__page">
               <div className="listing__page-container">
                    <div className="listing__page-content">
                         <div className="listing-item">
                              <h3>Elite</h3>
                              <h4>$900 USD </h4>
                              <div className="separator-wrapper">
                                   <div className="item-separator"></div>
                              </div>
                              <h5>Реинвестирование: <span> 400$</span></h5>
                              <div className="image-wrapper">
                                   <Image src={EliteImage} alt="elite image"/>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Баннер 615х90 на 15
                                   дней и 370x170 на 15 дней</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP,CG,RC +2 других форумах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голоса на
                                   ScamScavenger.tech, Allstats.io, InvestorsStartPage.com</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Получить рейтинг
                                   +200 от проекта</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голосовать в ТОП 7
                                   мониторах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Размещение проекта в
                                   соц. сетях</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Гарантированные
                                   +400$ инвестиции</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Создание видео
                                   обзора вашего проекта от нашей компании на 2х языках EN\RU!</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Создание полного
                                   описания пользования step by step вашего проекта</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Добавление вашего
                                   проекта в колонку - новые проекты!</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Закрепление в
                                   колонке Overview на 10 дней</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Поддержка 24/7
                                   часов</p>
                              </div>
                         </div>

                         <div className="listing-item">
                              <h3 className="exclusive-color">Exclusive</h3>
                              <h4>$700 USD</h4>
                              <div className="separator-wrapper">
                                   <div className="item-separator"></div>
                              </div>
                              <h5>Реинвестирование: <span> 250$</span></h5>
                              <div className="image-wrapper">
                                   <Image src={ExclusiveImage} alt="elite image"/>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Баннер 615х90 на 15
                                   дней и 370x170 на 15 дней</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP,CG,RC +2 других форумах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голоса на
                                   ScamScavenger.tech, Allstats.io, InvestorsStartPage.com</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Получить рейтинг
                                   +150 от проекта</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голосовать в ТОП 7
                                   мониторах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Размещение проекта в
                                   соц. сетях</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Гарантированные
                                   +250$ инвестиции</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Создание видео
                                   обзора вашего проекта от нашей компании на 2х языках EN\RU!</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Добавление вашего
                                   проекта в колонку - новые проекты!</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Закрепление в
                                   колонке Overview на 10 дней</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Поддержка 24/7
                                   часов</p>
                              </div>
                         </div>

                         <div className="listing-item">
                              <h3 className="premium-color">Premium</h3>
                              <h4>$500 USD</h4>
                              <div className="separator-wrapper">
                                   <div className="item-separator"></div>
                              </div>
                              <h5>Реинвестирование: <span> 200$</span></h5>
                              <div className="image-wrapper">
                                   <Image src={PremiumImage} alt="elite image"/>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Баннер 615х90 на 15
                                   дней и 370x170 на 15 дней</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP,CG,RC +2 других форумах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голоса на
                                   ScamScavenger.tech, Allstats.io, InvestorsStartPage.com</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Получить рейтинг
                                   +150 от проекта</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голосовать в ТОП 7
                                   мониторах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Размещение проекта в
                                   соц. сетях</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Гарантированные
                                   +200$ инвестиции</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Добавление вашего
                                   проекта в колонку - новые проекты!</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Поддержка 24/7
                                   часов</p>
                              </div>
                         </div>

                         <div className="listing-item">
                              <h3 className="normal-color">Normal</h3>
                              <h4>$250 USD</h4>
                              <div className="separator-wrapper">
                                   <div className="item-separator"></div>
                              </div>
                              <h5>Реинвестирование: <span> 100$</span></h5>
                              <div className="image-wrapper">
                                   <Image src={NormalImage} alt="elite image"/>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Баннер 615х90 на 15
                                   дней и 370x170 на 10 дней</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP,CG,RC</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голоса на
                                   ScamScavenger.tech</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Получить рейтинг
                                   +100 от проекта</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голосовать в ТОП 5
                                   мониторах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Размещение проекта в
                                   соц. сетях</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Гарантированные
                                   +100$ инвестиции</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Поддержка 24/7
                                   часов</p>
                              </div>
                         </div>

                         <div className="listing-item">
                              <h3 className="trial-color">Trial</h3>
                              <h4>$50 USD</h4>
                              <div className="separator-wrapper">
                                   <div className="item-separator"></div>
                              </div>
                              <h5>Реинвестирование:
                                    <span> нет</span></h5>
                              <div className="image-wrapper">
                                   <Image src={TrialImage} alt="elite image"/>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Баннер 615х90 на 10 дней</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p> Опубликовать
                                   подтверждение оплаты на DTM,MMGP</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голоса на
                                   ScamScavenger.tech</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Получить рейтинг
                                   +50 от проекта</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Голосовать в ТОП 3
                                   мониторах</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Размещение проекта в
                                   соц. сетях</p>
                              </div>
                              <div className="grid">
                                   <Image src={starIcon} alt='star icon' className="star-icon"/> <p>Поддержка 24/7
                                   часов</p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default ListingPackages;
