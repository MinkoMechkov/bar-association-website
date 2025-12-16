import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
