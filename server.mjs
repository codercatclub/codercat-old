import express from 'express';
import path from 'path';
import fs from 'fs';

let rawdata = fs.readFileSync('./constants/projects.json');
let projects = JSON.parse(rawdata);

const codercat = express();
const port = 8081;
const __dirname = path.resolve();

if (process.env.DEV) {
  codercat.use(express.static('public'));
  codercat.use(express.static('public/html'));
} else {
  codercat.use(express.static('build'));
  codercat.use(express.static('build/html'));
}

// Frontend routes for react router
codercat.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
codercat.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
codercat.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

projects.forEach((app) => {
  const expressApp = express();

  if (!app.public) {
    // Skip projects that do not have sub apps
    return;
  }

  for (let i = 0; i < app.public.length; i += 1) {
    expressApp.use(express.static(app.public[i], { extensions: ['html'] }));
  }

  expressApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, app.entry));
  });

  codercat.use('/' + app.route, expressApp);
});

// Start server
codercat.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
