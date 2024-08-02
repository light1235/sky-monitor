
import React from 'react';
import  './index.scss'
import PartnersReview from "@/components/main/partners-review";
import {useGetPartnersQuery} from "@/services/partnersApi";

const Partners = async () => {

     // const {data: partners = [], error: partnersError, isLoading: partnersLoading} = useGetPartnersQuery(undefined, {
     //      pollingInterval: 60000,
     //      refetchOnMountOrArgChange: true,
     //      refetchOnReconnect: true,
     // });

     const data = await getData()
     console.log(data);

     // const partnerItems = [...partners].reverse();

     return (
          <section className="partners__page">
               <div className="partners__page-container">
                    <div className="partners__page-content">
                         <h1>Our Partners</h1>
                         <div className="content-block">
                              {data.map(item =>
                                   <PartnersReview item={item} key={item.id}/>
                              )}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Partners;

// Страница.js
async function getData() {
     const res = await fetch('https://raw.githubusercontent.com/light1235/sky-monitor/master/src/db/partnersData.json')
     // The return value is *not* serialized
     // You can return Date, Map, Set, etc.

     if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
     }

     return res.json()
}

