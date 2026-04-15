import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cpu } from 'lucide-react';
import { Button } from './ui/button';

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/shop', 'ICT Shop'],
  ['/about', 'About'],
  ['/contact', 'Contact']
];

export function SiteHeader({ toggleTheme, isDark }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Cpu className="h-6 w-6 text-brand-400" />
          Teqnow
        </NavLink>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-brand-300' : 'text-slate-300 hover:text-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={toggleTheme} className="hidden md:inline-flex">
            {isDark ? 'Light' : 'Dark'}
          </Button>
          <Button onClick={() => (window.location.href = '/contact')}>Get Quote</Button>
        </div>
      </div>
    </header>
  );
}
