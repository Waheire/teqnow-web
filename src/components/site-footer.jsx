import React from 'react';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Teqnow. All rights reserved.</p>
        <p>ATM • ICT • CCTV • ICT Shop</p>
      </div>
    </footer>
  );
}
