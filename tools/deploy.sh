#!/usr/bin/env bash

# Sync static codercat build
rsync -av out/ kiko@codercat.tk:~/codercat2/out/

# Sync the server
rsync -av server.mjs kiko@codercat.tk:~/codercat2/server.mjs

# Sync projec list
rsync -av constants/projects.json kiko@codercat.tk:~/codercat2/constants/projects.json

# Restart the server
ssh -t kiko@codercat.tk sudo systemctl restart codercat