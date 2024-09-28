export const  formatDate = (timestamp) => {
     const date = new Date(timestamp);

     const day = date.getDate().toString().padStart(2, '0');
     const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
     const month = monthNames[date.getMonth()];
     const hours = date.getHours().toString().padStart(2, '0');
     const minutes = date.getMinutes().toString().padStart(2, '0');

     return `${day} ${month} ${hours}.${minutes}`;
};
