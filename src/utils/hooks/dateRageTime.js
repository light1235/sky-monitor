import { useState, useEffect } from 'react';

const useDateRange = (days) => {
     const [dateRange, setDateRange] = useState({ from: '', to: '' });

     useEffect(() => {
          const now = new Date();
          const fromDate = formatDate(now);

          const endDate = new Date();
          endDate.setDate(endDate.getDate() + days);
          const toDate = formatDate(endDate);

          setDateRange({ from: fromDate, to: toDate });
     }, [days]);

     const formatDate = (date) => {
          const day = date.getDate();
          const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');

          return `${day} ${month} ${hours}.${minutes}`;
     };

     return dateRange;
};

export default useDateRange;
