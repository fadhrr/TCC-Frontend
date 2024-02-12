import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Home/Footer';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TCC',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#f5f5f5]' suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
