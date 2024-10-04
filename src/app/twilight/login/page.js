"use client"
import React, {useState} from 'react';
import './index.scss'
import Image from "next/image";
import menuLogo from '/src/assets/panel/icons/panel-logo.svg';
import CustomCheckBox from "@/components/panel/check-box";
import CustomButton from "@/components/panel/custom-button";

const Login = () => {
     const [userData, setUserData] = useState([
          {name:'',password:'',remember:false}
     ]);
     const handleForgotChange = (value) => {
          // setUserData({ ...userData, remember: value });
     };
     
     return (
          <div className="login__page-admin">
               <div className="login-form-admin">
                    <div className="form-top">
                         <div className="top-inner">
                              <Image src={menuLogo}  alt={'logo'}/>
                              <p>Sky</p>
                         </div>
                    </div>
                    <div className="form-content">
                         <h3>Login to continue</h3>
                         <label>
                              <p>Username</p>
                              <input type="text" placeholder={'Your username'}/>
                         </label>
                         <label>
                              <p>Password</p>
                              <input type="text" placeholder={'Your password'}/>
                         </label>
                         <label className="login-check">
                              <CustomCheckBox onSelect={handleForgotChange}/> <p> Remember me</p>
                         </label>
                         <CustomButton name={'Login'} width={'195px'}/>
                    </div>
               </div>
          </div>
     );
};

export default Login;
