"use client"
import React, { useRef, useState } from 'react';
import './index.scss'
import CustomCheckBox from "@/components/panel/check-box";
import CustomButton from "@/components/panel/custom-button";
import CustomInput from "@/components/panel/custom-input";

const VoteTableLine = ({ item, back, dataFor, dataAgainst, onPaymentDataChange }) => {
     const inputRef = useRef(null);
     const [activeButton, setActiveButton] = useState(true);
     const [inputValueFor, setInputValueFor] = useState(dataFor);
     const [inputValueAgainst, setInputValueAgainst] = useState(dataAgainst);

     const handleButtonClick = () => {
          setActiveButton(!activeButton);
          if (activeButton) {
               // Focus input when entering edit mode
               setTimeout(() => {
                    // inputRef.current.focus();
               }, 0);
          } else {
               // Submit changes
               // const [forValue, againstValue] = inputValue.split(" - ");
               onPaymentDataChange({ for: inputValueFor.trim(), against: inputValueAgainst.trim() });
          }
     };

     const handleInputChange = (e) => {
          setInputValueFor(e.target.value);
     };
     const handleInputAgainstChange = (e) => {
          setInputValueAgainst(e.target.value);
     };

     return (
          <div className="vote-data-table" style={{ backgroundColor: back }}>
               <div className="table-left">
                    <CustomCheckBox />
                    <div className="image-block"></div>
                    <p>{item.name}</p>
               </div>
               <div className="table-right">
                    <p>{item.type}</p>
                    <input
                         onChange={handleInputChange}
                         ref={inputRef}
                         value={inputValueFor}
                         readOnly={activeButton}
                         maxLength="3"
                    />
                    <input type="text"
                           onChange={handleInputAgainstChange}
                           value={inputValueAgainst}
                           readOnly={activeButton}
                           maxLength="3"
                    />
                    <p>Premium</p>
                    <p>{item.category}</p>
                    <div className="table-panel">
                         <div onClick={handleButtonClick}>
                              <CustomButton  name={activeButton ? "Edit" : "Submit"} color={activeButton ? "#85CE36" : "#5B5BDF"} />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default VoteTableLine;
