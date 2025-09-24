import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

const users = new Map();

app.use(cors());
app.use(express.json());

app.post('/auth/signup', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' });

  if (users.has(email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.set(email, { password });
  return res.json({ message: 'Signup successful' });
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Fake JWT (don't use in production!)
  const token = `demo-token-${Buffer.from(email).toString('base64')}`;

  return res.json({ data: { access_token: token } });
});

app.listen(PORT, () => {
  console.log(`✅ Auth API running at http://localhost:${PORT}`);
});
