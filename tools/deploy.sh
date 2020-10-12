#!/usr/bin/env bash

# Sync static codercat build
rsync -av out/ kiko@codercat.tk:/home/kiko/codercat2/out/

# Sync the server
rsync -av server.mjs kiko@codercat.tk:/home/kiko/codercat2/server.mjs

# Restart the server
ssh -t kiko@codercat.tk sudo systemctl restart codercat