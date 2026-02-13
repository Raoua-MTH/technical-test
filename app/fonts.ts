import localFont from 'next/font/local';

export const gilroy = localFont({
  src: [
    { path: '../public/fonts/gilroy/Gilroy-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/gilroy/Gilroy-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/gilroy/Gilroy-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/gilroy/Gilroy-Medium.ttf', weight: '500', style: 'normal' },
  ],
  variable: '--font-gilroy',
  display: 'swap',
});
