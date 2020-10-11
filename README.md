# CODERCAT

This is cats collaborative that want to make world a better place by embracing technology and forward thinking.

## To run localy
```
git clone https://github.com/Kif11/codercat
cd codercat/
yarn dev
```

## To add a new project

Upload new project thumnail to public/img
Upload project build under projects/<name>
Create new entry in src/constants/projects.js
Build and restart codercat server `yarn build && sudo systemctl restart codercat`

Thumbnail requirements:

- Image size 600x600 pixel
- JPEG format
- JPEG quality is 0.8 or 80%

Creators [Kirill](https://github.com/kif11) and [Snay](https://github.com/sneha-belkhale)