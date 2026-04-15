import React from 'react';
import { cn } from '../../lib/utils';

const variants = {
  default: 'bg-brand-500 text-white hover:bg-brand-400',
  outline: 'border border-slate-600 bg-transparent text-slate-100 hover:bg-slate-800',
  ghost: 'bg-transparent text-slate-100 hover:bg-slate-800'
};

export function Button({ className, variant = 'default', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
