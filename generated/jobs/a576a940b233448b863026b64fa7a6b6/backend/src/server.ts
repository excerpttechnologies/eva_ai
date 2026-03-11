```typescript
import express from 'express';

const app = express();
app.use(express.json());

// Minimal API route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```