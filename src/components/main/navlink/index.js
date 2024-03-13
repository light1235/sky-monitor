'use client'
import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import {useRouter} from "next/router";

const NavLink = ({ href, text }) => {
     const router = useRouter();

     // Проверяем, является ли текущий путь активным
     const isActive = router.pathname === href;

     return (
          <Link href={href}>
               <a className={isActive ? 'active' : ''}>{text}</a>
          </Link>
     );
};

export default NavLink;
