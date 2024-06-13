"use client"
import React, {useState} from 'react';
import './index.scss'
import ZeroIcon from '../../../assets/dashboard/user-icon/default-icon.jpg';
import UserIcon1 from '../../../assets/dashboard/user-icon/1.jpg';
import UserIcon2 from '../../../assets/dashboard/user-icon/2.jpg';
import UserIcon3 from '../../../assets/dashboard/user-icon/3.jpg';
import UserIcon4 from '../../../assets/dashboard/user-icon/4.jpg';
import UserIcon5 from '../../../assets/dashboard/user-icon/5.jpg';
import UserIcon6 from '../../../assets/dashboard/user-icon/6.jpg';
import UserIcon7 from '../../../assets/dashboard/user-icon/7.jpg';
import UserIcon8 from '../../../assets/dashboard/user-icon/8.jpg';
import UserIcon9 from '../../../assets/dashboard/user-icon/9.jpg';
import UserIcon10 from '../../../assets/dashboard/user-icon/10.jpg';
import UserIcon11 from '../../../assets/dashboard/user-icon/11.jpg';
import UserIcon12 from '../../../assets/dashboard/user-icon/12.jpg';
import UserIcon13 from '../../../assets/dashboard/user-icon/13.jpg';
import UserIcon14 from '../../../assets/dashboard/user-icon/14.jpg';
import UserIcon15 from '../../../assets/dashboard/user-icon/15.jpg';
import UserIcon16 from '../../../assets/dashboard/user-icon/16.jpg';
import UserIcon17 from '../../../assets/dashboard/user-icon/17.jpg';
import UserIcon18 from '../../../assets/dashboard/user-icon/18.jpg';
import UserIcon19 from '../../../assets/dashboard/user-icon/19.jpg';
import UserIcon20 from '../../../assets/dashboard/user-icon/20.jpg';
import UserIcon21 from '../../../assets/dashboard/user-icon/21.jpg';
import UserIcon22 from '../../../assets/dashboard/user-icon/22.jpg';
import UserIcon23 from '../../../assets/dashboard/user-icon/23.jpg';
import UserIcon24 from '../../../assets/dashboard/user-icon/24.jpg';
import Image from "next/image";


const Profile = () => {
     const [selectedImage, setSelectedImage] = useState(null);
     const [selectedClass,setSelectedClass] = useState(null);

     const line1 = [UserIcon1, UserIcon2, UserIcon3, UserIcon4, UserIcon5, UserIcon6, UserIcon7, UserIcon8];
     const line2 = [UserIcon9, UserIcon10, UserIcon11, UserIcon12, UserIcon13, UserIcon14, UserIcon15, UserIcon16];
     const line3 = [UserIcon17, UserIcon18, UserIcon19, UserIcon20, UserIcon21, UserIcon22, UserIcon23, UserIcon24];
     const StyleClass = ['gold','silver','emerald','diamond','ruby','grey','turquoise','full-blur'];
     return (
          <div className="profile-page">
               <div className="profile-inner">
                    <div className="inner-data">
                         <div className="data-item">
                              <div className="item-name">User Name</div>
                              <div className="item-input">Dora</div>
                         </div>
                         <div className="data-item">
                              <div className="item-name">Registration Date</div>
                              <div className="item-input">18.02.2024</div>
                         </div>
                    </div>
                    <div className="inner-user-preview">
                         <p>Profile photo</p>
                         {
                              <Image
                                   src={selectedImage ? selectedImage : ZeroIcon }
                                   alt="Selected Image"
                                   className={line3.includes(selectedImage) ? StyleClass[selectedClass] : ''}
                              />
                         }
                    </div>
                    <div className="inner-user-icons">
                         <div>
                              {line1.map((post, index) => (
                                   <Image
                                        src={post}
                                        key={index}
                                        onClick={() => setSelectedImage(post)}
                                        className={selectedImage === post ? 'active' : null}
                                        alt={`User Icon ${index + 1}`}
                                   />
                              ))}
                         </div>
                         <div>
                              {line2.map((post, index) => (
                                   <Image
                                        src={post}
                                        key={index + line1.length}
                                        onClick={() => setSelectedImage(post)}
                                        className={selectedImage === post ? 'active' : null}
                                        alt={`User Icon ${index + line1.length + 1}`}
                                   />
                              ))}
                         </div>
                         <div>
                              {line3.map((post, index) => (
                                   <>
                                        <div>
                                             <Image
                                                  src={post}
                                                  key={index + line1.length + line2.length}
                                                  onClick={() => {
                                                       setSelectedImage(post)
                                                       setSelectedClass(index);
                                                  }}
                                                  className={selectedImage === post ? `${StyleClass[index]} active` : StyleClass[index]}
                                                  alt={`User Icon ${index + line1.length + line2.length + 1}`}
                                             />
                                        </div>
                                   </>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Profile;
