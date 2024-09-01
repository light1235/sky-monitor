'use client';

import {useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing.public';

export default function PublicNavigationLocaleSwitcher({langVar}) {
     return (
          <div className="flex gap-3 py-5">
               {langVar === "ru"  ?   <LocaleLink locale="en" /> : <LocaleLink locale="ru" />}
          </div>
     );
}

function LocaleLink({locale}) {
     const pathname = usePathname();
     const isActive = useLocale() === locale;

     return (
          <Link
               className={isActive ? 'underline' : undefined}
               href={pathname}
               locale={locale}
          >
               {locale.toUpperCase()}
          </Link>
     );
}
