import {NextRequest, NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing.public';

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const isAppRoute = pathname === '/app' || pathname.startsWith('/app/');
  const isDashBoardRoute = pathname === '/my' || pathname.startsWith('/my/');
  const isPanel = pathname === '/panel' || pathname.startsWith('/panel/');
  // Редирект с /services на /services/partner
  // if (pathname === '/services') {
  //   const url = request.nextUrl.clone();
  //   url.pathname = '/services/partner';
  //   return NextResponse.redirect(url);
  // }

  const intlMiddleware = createMiddleware(routing);

  if (isAppRoute) {
    // Добавляем подсказку, которую можно прочитать в `i18n.ts`
    request.headers.set('x-app-route', 'true');
    return NextResponse.next({request: {headers: request.headers}});
  } else if (isDashBoardRoute) {
    // Добавляем подсказку для маршрутов `services`
    request.headers.set('x-my-route', 'true');
    return NextResponse.next({request: {headers: request.headers}});
  }  else if (isPanel) {
    // Добавляем подсказку для маршрутов `services`
    request.headers.set('x-panel-route', 'true');
    return NextResponse.next({request: {headers: request.headers}});
  } else {
    return intlMiddleware(request);
  }
}

export const config = {
  // Обрабатываем только интернационализированные маршруты
  matcher: ['/', '/(en|ru)/:path*', '/app/:path*', '/my/:path*', '/panel/:path*']
};
