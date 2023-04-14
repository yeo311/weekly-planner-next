import FloatingButton from '@/components/FloatingButton';
import './globals.css';
import { Noto_Sans } from 'next/font/google';
import Header from '@/components/Header';

export const metadata = {
  title: 'Weekly Planner',
  description: 'Weekly Planner',
};

const sans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${sans.className}`}>
        <Header />
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
