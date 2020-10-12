import express from 'express';
import path from 'path';
import fs from 'fs';

let rawdata = fs.readFileSync('./constants/projects.json');
let projects = JSON.parse(rawdata);

const codercat = express();
const port = 8081;
const __dirname = path.resolve();

// Serve main site static files first
codercat.use(express.static('out', { extensions: ['html'] }));

projects.forEach((app) => {
  const subApp = express();

  if (!app.public) {
    // Skip projects that do not have sub apps
    return;
  }

  for (let i = 0; i < app.public.length; i += 1) {
    subApp.use(express.static(app.public[i], { extensions: ['html'] }));
  }

  subApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, app.entry));
  });

  const appRoute = '/' + app.route;

  console.log('[+] Hosting', app.name, 'under', appRoute);

  // Each app will be server on sub-route
  // with its own configuration and set of public assets
  codercat.use(appRoute, subApp);
});

// Start server
codercat.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
