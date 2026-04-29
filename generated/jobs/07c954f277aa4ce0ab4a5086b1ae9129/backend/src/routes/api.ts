import express, { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router: Router = express.Router();

// Mock data for poems
interface Poem {
  id: string;
  title: string;
  content: string;
  analysis: string;
  suggestions: string;
}

const poems: Poem[] = [
  { id: uuidv4(), title: 'Poem 1', content: 'Content 1', analysis: 'Analysis 1', suggestions: 'Suggestions 1' },
  { id: uuidv4(), title: 'Poem 2', content: 'Content 2', analysis: 'Analysis 2', suggestions: 'Suggestions 2' },
  { id: uuidv4(), title: 'Poem 3', content: 'Content 3', analysis: 'Analysis 3', suggestions: 'Suggestions 3' },
];

// GET /poems (list)
router.get('/poems', (req, res) => {
  res.json(poems);
});

// GET /poems/:id (by id)
router.get('/poems/:id', (req, res) => {
  const id = req.params.id;
  const poem = poems.find((p) => p.id === id);
  if (poem) {
    res.json(poem);
  } else {
    res.status(404).json({ message: 'Poem not found' });
  }
});

// POST /poems (create)
router.post('/poems', (req, res) => {
  const newPoem: Poem = {
    id: uuidv4(),
    title: req.body.title,
    content: req.body.content,
    analysis: req.body.analysis,
    suggestions: req.body.suggestions,
  };
  poems.push(newPoem);
  res.json(newPoem);
});

// PUT /poems/:id (update)
router.put('/poems/:id', (req, res) => {
  const id = req.params.id;
  const poem = poems.find((p) => p.id === id);
  if (poem) {
    poem.title = req.body.title;
    poem.content = req.body.content;
    poem.analysis = req.body.analysis;
    poem.suggestions = req.body.suggestions;
    res.json(poem);
  } else {
    res.status(404).json({ message: 'Poem not found' });
  }
});

// DELETE /poems/:id (delete)
router.delete('/poems/:id', (req, res) => {
  const id = req.params.id;
  const index = poems.findIndex((p) => p.id === id);
  if (index !== -1) {
    poems.splice(index, 1);
    res.json({ message: 'Poem deleted' });
  } else {
    res.status(404).json({ message: 'Poem not found' });
  }
});

// GET /poemanalysis (list)
router.get('/poemanalysis', (req, res) => {
  res.json(poems.map((p) => ({ id: p.id, analysis: p.analysis })));
});

// GET /poemsuggestions (list)
router.get('/poemsuggestions', (req, res) => {
  res.json(poems.map((p) => ({ id: p.id, suggestions: p.suggestions })));
});

export const apiRouter = router;