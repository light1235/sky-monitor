import React, { useEffect, useState } from 'react';

const ModifiedStrings = ({ domains }) => {
     const [modifiedString, setModifiedString] = useState('');
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          if (Array.isArray(domains)) {
               const removeDomain = /\..*$/;
               const modifiedString = domains.map(originalString => originalString.replace(removeDomain, '')).join(', ');
               setModifiedString(modifiedString);
               setLoading(false);
          }
     }, [domains]);

     if (loading) {
          return <div>Loading...</div>;
     }

     return <div>{modifiedString || 'No data'}</div>;
};

export default ModifiedStrings;
