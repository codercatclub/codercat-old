#!/usr/bin/env bash

export CODERCAT_SERVER_URL="https://codercat.tk"

yarn build

# Sync static codercat build
rsync -av out/ kiko@codercat.tk:~/codercat2/out/

# Sync the server
rsync -av server.mjs kiko@codercat.tk:~/codercat2/server.mjs

# Sync projec list
rsync -av constants/projects.json kiko@codercat.tk:~/codercat2/constants/projects.json

# Sync package.json to install server dependencies
rsync -av package.json kiko@codercat.tk:~/codercat2/package.json

# Install dependencies (One time only)
# NOTE: Do it manually e.g.
# ssh kiko@codercat.tk
# cd codercat2
# yarn

# Restart the server
ssh -t kiko@codercat.tk sudo systemctl restart codercat