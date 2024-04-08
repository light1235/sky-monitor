import React, { useEffect, useState } from 'react';

const ModifiedStrings = ({ domains }) => {
     const [modifiedString, setModifiedString] = useState('');
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          if (Array.isArray(domains)) {
               const removeDomain = /\..*$/;
               const modifiedString = domains.map(originalString => originalString.replace(removeDomain, '')).join(', ');
               setModifiedString(modifiedString);
               setLoading(false); // Помечаем, что загрузка завершена
          }
     }, [domains]);

     if (loading) {
          return <div>Loading...</div>;
     }

     return <div>{modifiedString || 'No data'}</div>; // Проверяем, если modifiedString пустая, отображаем 'No data'
};

export default ModifiedStrings;
