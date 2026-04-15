import React, { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  async function submitForm(event) {
    event.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-bold">Contact Teqnow</h1>
      <p className="mt-3 text-slate-300">Need immediate support or a quote? Reach out via any channel below.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card>
          <form className="space-y-4" onSubmit={submitForm}>
            <Input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <Textarea placeholder="How can we help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            <Button type="submit" className="w-full" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
            </Button>
            {status === 'success' && <p className="text-sm text-emerald-400">Message sent successfully.</p>}
            {status === 'error' && <p className="text-sm text-rose-400">Could not send message. Please try again.</p>}
          </form>
        </Card>
        <Card className="space-y-5">
          <a href="tel:+15551234567" className="flex items-center gap-3 text-slate-200 hover:text-white">
            <Phone className="h-5 w-5 text-brand-300" /> +1 (555) 123-4567
          </a>
          <a href="mailto:hello@teqnow.com" className="flex items-center gap-3 text-slate-200 hover:text-white">
            <Mail className="h-5 w-5 text-brand-300" /> hello@teqnow.com
          </a>
          <a href="https://wa.me/15551234567" className="flex items-center gap-3 text-slate-200 hover:text-white">
            <MessageCircle className="h-5 w-5 text-brand-300" /> WhatsApp Chat
          </a>
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-5 text-sm text-slate-300">
            <p className="font-semibold text-white">Head Office</p>
            <p>123 Tech Avenue, Innovation District</p>
            <p>Mon - Sat, 8:00 AM - 8:00 PM</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
