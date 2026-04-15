import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, ...props }) {
  return <div className={cn('glass rounded-2xl p-6 shadow-soft', className)} {...props} />;
}
