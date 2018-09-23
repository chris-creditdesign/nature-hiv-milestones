# Enhanced presentation for Nature HIV Milestone

## Install [webpack](https://webpack.js.org/) and dependencies:

	npm install

## Build process. 

To create css and js files and instruct webpack to watch all files for changes:

	npm run dev

To create minified, autoprefixed css and js files:

	npm run dist

## Deploy to GitHub pages

	sh gh-page-deploy.sh dist

## Log git commits with date and description

	git log --pretty=format:"%ad%x09%s"

## To do:

- Add pa11y test
- Remove modernizr
- No js class on body?
- Re do CSS as BEM

