import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
const CountdownTimer = ({ initialHours, onComplete }) => {
     const locale = useLocale();
     const initialTime = initialHours * 3600; // Convert hours to seconds
     const [time, setTime] = useState(initialTime);

     useEffect(() => {
          const timer = setInterval(() => {
               setTime(prevTime => prevTime - 1);
          }, 1000);

          if (time === 0) {
               clearInterval(timer);
               if (onComplete) {
                    onComplete();
               }
          }

          return () => clearInterval(timer);
     }, [time, onComplete]);

     const formatTime = (seconds) => {
          const hrs = Math.floor(seconds / 3600);
          const mins = Math.floor((seconds % 3600) / 60);
          const secs = seconds % 60;
          return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
     };

     return (

               <>{locale === 'en'? 'Time left':'Осталось'}: {formatTime(time)}</>
     );
};

export default CountdownTimer;
