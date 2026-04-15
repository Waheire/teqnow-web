import React, { useEffect, useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const categories = ['All', 'Laptops', 'Accessories', 'Networking'];

export function ShopPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch(() => setProducts([]));
  }, []);

  const filtered = category === 'All' ? products : products.filter((item) => item.category === category);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-bold">ICT Shop</h1>
      <p className="mt-3 text-slate-300">Source genuine business-grade tech hardware directly from Teqnow.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((item) => (
          <Button key={item} variant={item === category ? 'default' : 'outline'} onClick={() => setCategory(item)}>
            {item}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <img src={product.image} alt={product.name} className="h-40 w-full rounded-lg object-cover" />
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="mt-1 text-sm text-slate-400">{product.category}</p>
            <p className="mt-3 text-xl font-bold text-brand-300">${product.price.toLocaleString()}</p>
            <Button className="mt-4">Request Availability</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
