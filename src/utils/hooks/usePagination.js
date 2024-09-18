import { useState, useEffect } from 'react';

const usePagination = (data, itemsPerPage, resetPageTrigger) => {
     const [currentPage, setCurrentPage] = useState(1);

     useEffect(() => {
          setCurrentPage(1);
     }, [resetPageTrigger]);

     const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
     const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

     const handlePageChange = (page) => {
          setCurrentPage(page);
     };

     return { currentItems, handlePageChange, currentPage, totalItems: data.length };
};

export default usePagination;
