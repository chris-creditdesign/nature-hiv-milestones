# Enhanced presentation for Nature HIV Milestone

## Install [webpack](https://webpack.js.org/) and dependencies:

	npm install

## Build process. 

To create source html file from react components and markdown/yaml data

	node render_to_file.js

To create css and js files and instruct webpack to watch all files for changes:

	npm run dev

To create minified, autoprefixed css and js files:

	npm run dist

## Deploy to GitHub pages

	sh gh-page-deploy.sh dist

## Log git commits with date and description

	git log --pretty=format:"%ad%x09%s"

## To do:

- Weirdness with counter position or resize 
- Update SVG to just provide coordinates - can be rendered in canvas or svg. Does the svg have to be added to the page? 
