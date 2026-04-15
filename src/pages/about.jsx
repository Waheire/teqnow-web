import React from 'react';
import { Card } from '../components/ui/card';

export function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-14">
      <h1 className="text-4xl font-bold">About Teqnow</h1>
      <Card>
        <h2 className="text-xl font-semibold">Company Overview</h2>
        <p className="mt-3 text-slate-300">
          Teqnow is a technology service company helping businesses maintain uptime through ATM support, ICT infrastructure
          services, CCTV solutions, and dependable hardware procurement.
        </p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="mt-3 text-slate-300">
            To simplify technical operations for organizations through fast support, quality equipment, and trusted expertise.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="mt-3 text-slate-300">
            To become Africa’s most dependable technical partner for mission-critical systems and digital infrastructure.
          </p>
        </Card>
      </div>
    </main>
  );
}
