import Header from '@/components/Nav';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import { AuthContextProvider } from '@/context/AuthContext';
import './globals.css';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';

// const inter = inter({ subsets: ["latin"] });

export const metadata = {
  title: 'TCC',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen flex flex-col font-sans antialiased', fontSans.className)}>
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
