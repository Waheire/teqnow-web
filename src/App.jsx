import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import { WhatsAppFloat } from './components/whatsapp-float';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { HomePage } from './pages/home';
import { ServicesPage } from './pages/services';
import { ShopPage } from './pages/shop';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader toggleTheme={() => setIsDark((prev) => !prev)} isDark={isDark} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
