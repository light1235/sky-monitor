"use client"
import React, {useState, useEffect, useRef} from 'react';
import './index.scss';

const PaymentInput = ({ dataKey, data, onPaymentDataChange }) => {
     const [inputValue, setInputValue] = useState(data);
     const [activeButton, setActiveButton] = useState(true);
     const [activeFocus, setActiveFocus] = useState(false);

     useEffect(() => {
          setInputValue(data);
     }, [data]);

     const handleInputChange = (e) => {
          setInputValue(e.target.value);
     };

     const handleButtonClick = () => {
          setActiveButton(!activeButton);
          onPaymentDataChange(dataKey, inputValue);

          if (inputRef.current) {
               inputRef.current.focus();
          }
     };

     const inputRef = useRef(null);




     return (
          <div className="payment-input">
               <input
                    readOnly={activeButton}
                    value={inputValue}
                    onChange={handleInputChange}
                    ref={inputRef}
                    className={activeFocus ? 'active' : ''}

               />
               <div onClick={handleButtonClick}>
                    {activeButton ? <i className="icon-edit"></i> : <i className="icon-ok"></i>}
               </div>
          </div>
     );
};

export default PaymentInput;
