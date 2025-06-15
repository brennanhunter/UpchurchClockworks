'use client';

import { MenuProvider, MenuContext } from '@/context/MenuContext';
import { useContext } from 'react';
import { Logo } from './components/Logo';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  function HeaderWithMenuContext() {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext) as {
      isMenuOpen: boolean;
      setIsMenuOpen: (open: boolean) => void;
    };
    return <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />;
  }

  return (
    <html lang="en">
      <body className="relative">
        <MenuProvider>
          <Logo />
          <HeaderWithMenuContext />
          {children}
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}