import React from 'react';
import { Card } from '../components/ui/card';
import { services } from '../lib/data';

const details = {
  'ATM Support': [
    'Preventive maintenance scheduling',
    'Cash dispenser and sensor troubleshooting',
    'On-site and remote diagnostics'
  ],
  'ICT Support': ['LAN/WAN setup and optimization', 'Server & cloud infrastructure support', 'Cybersecurity hardening and endpoint support'],
  'Camera Installation & Repairs': [
    'Site survey and camera placement strategy',
    'NVR/DVR setup and remote viewing',
    'Repair and upgrade of existing CCTV systems'
  ],
  'ICT Shop': [
    'Business laptops and workstations',
    'Routers, switches, and cables',
    'Accessories and replacement hardware'
  ]
};

export function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p className="mt-3 max-w-2xl text-slate-300">
        End-to-end technical services designed for reliability, speed, and long-term growth.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title}>
            <service.icon className="h-8 w-8 text-brand-300" />
            <h2 className="mt-3 text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-slate-300">{service.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {details[service.title].map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </main>
  );
}
