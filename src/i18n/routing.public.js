import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
import {locales, defaultLocale} from '@/config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      de: '/pfadnamen'
    }
  }
});
export const {Link, getPathname, redirect, usePathname, useRouter} =
     createLocalizedPathnamesNavigation(routing);



