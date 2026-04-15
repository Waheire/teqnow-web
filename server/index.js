import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'Laptops',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1593642702744-d377ab507dc8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Ubiquiti UniFi Access Point',
    category: 'Networking',
    price: 220,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Logitech MX Master 3S',
    category: 'Accessories',
    price: 119,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
  }
];

const inquiries = [];

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'teqnow-api' });
});

app.get('/api/products', (_req, res) => {
  res.json({ products });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const inquiry = {
    id: inquiries.length + 1,
    name,
    email,
    phone,
    message,
    createdAt: new Date().toISOString()
  };

  inquiries.push(inquiry);

  return res.status(201).json({ success: true, inquiry });
});

app.listen(PORT, () => {
  console.log(`Teqnow API running on http://localhost:${PORT}`);
});
