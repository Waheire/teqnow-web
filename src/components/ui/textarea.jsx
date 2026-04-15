import React from 'react';
import { cn } from '../../lib/utils';

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'min-h-32 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30',
        className
      )}
      {...props}
    />
  );
}
