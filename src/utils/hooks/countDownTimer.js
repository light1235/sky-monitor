import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialHours, id, onComplete,locale }) => {
     if (initialHours === undefined || initialHours === null) {
          return <div>Ошибка: Время не указано.</div>;
     }

     const [time, setTime] = useState(initialHours * 3600);
     const [isActive, setIsActive] = useState(true);

     useEffect(() => {
          setTime(initialHours * 3600);
          setIsActive(true);
     }, [initialHours,id]);

     useEffect(() => {
          if (!isActive) return;

          const timer = setInterval(() => {
               setTime(prevTime => {
                    if (prevTime <= 1) {
                         clearInterval(timer);
                         if (onComplete) onComplete(id); // Передаем id в onComplete
                         return 0;
                    }
                    return prevTime - 1;
               });
          }, 1000);

          return () => clearInterval(timer);
     }, [isActive, onComplete]);

     const formatTime = (seconds) => {
          const hrs = Math.floor(seconds / 3600);
          const mins = Math.floor((seconds % 3600) / 60);
          const secs = seconds % 60;
          return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
     };

     return (
          <>{locale ? (locale === 'en' ? 'Time left' : 'Осталось') : ''} {formatTime(time)}</>
     );
};

export default CountdownTimer;



// {locale ? (locale === 'en' ? 'Time left' : 'Осталось') : ''} {formatTime(time)}
