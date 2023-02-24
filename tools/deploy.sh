#!/usr/bin/env bash

set -e

export CODERCAT_SERVER_URL="https://codercat.tk"

yarn build

# Sync static codercat build
rsync -av -e "ssh -p 38323" out/ kiko@codercat.tk:~/codercat/out/

# Sync the server
rsync -av -e "ssh -p 38323" server.mjs kiko@codercat.tk:~/codercat/server.mjs

# Sync projec list
rsync -av -e "ssh -p 38323" constants/projects.json kiko@codercat.tk:~/codercat/constants/projects.json

# Sync package.json to install server dependencies
rsync -av -e "ssh -p 38323" package.json kiko@codercat.tk:~/codercat/package.json

# Install dependencies (One time only)
# NOTE: Do it manually e.g.
# ssh kiko@codercat.tk
# cd codercat
# yarn

# Restart the server
ssh -t codercat sudo systemctl restart codercat

# Remove artifacts
rm -rf out