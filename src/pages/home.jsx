import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { services, testimonials, trustPoints } from '../lib/data';

export function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-4 inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300">
            Premium Tech Partner
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Reliable ATM, ICT & CCTV support that scales with your business.
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Teqnow helps teams stay online and secure with 24/7 support, rapid deployments, and enterprise-grade service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => (window.location.href = '/contact')}>Book a Consultation</Button>
            <Button variant="outline" onClick={() => (window.location.href = '/services')}>
              Explore Services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        <Card className="p-8">
          <h2 className="text-xl font-semibold">Why businesses choose Teqnow</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {['24/7 on-call technical support', 'Nationwide coverage model', 'Clear pricing & SLA plans'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-400" /> {item}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Core Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <service.icon className="h-8 w-8 text-brand-400" />
              <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-slate-300">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trustPoints.map((point) => (
            <Card key={point.title}>
              <point.icon className="h-7 w-7 text-brand-300" />
              <h3 className="mt-3 font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{point.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">What clients say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.quote}>
              <p className="text-slate-200">“{item.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">— {item.name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <Card className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Ready to secure and scale your operations?</h2>
            <p className="mt-2 text-slate-300">Let’s discuss your ATM, ICT, CCTV, or procurement requirements.</p>
          </div>
          <Link to="/contact">
            <Button>Talk to Teqnow</Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
