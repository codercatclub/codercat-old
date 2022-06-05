import express from "express";
import path from "path";
import fs from "fs";

let projects = JSON.parse(fs.readFileSync("./constants/projects.json"));

const codercat = express();
const port = 8081;
const __dirname = path.resolve();

// Serve main site static files first
codercat.use(express.static("out", { extensions: ["html"] }));

projects.forEach((app) => {
  const subApp = express();
  const appRoute = "/" + app.route;

  // Skip projects that do not have sub apps
  if (!app.public) return;

  app.public.forEach((path) =>
    subApp.use(express.static(path, { extensions: ["html"] }))
  );

  subApp.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, app.entry));
  });

  // Each app will be server on sub-route
  // with its own configuration and set of public assets
  console.log("[+] Hosting", app.name, "under", appRoute);
  codercat.use(appRoute, subApp);
});

// Start server
codercat.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
