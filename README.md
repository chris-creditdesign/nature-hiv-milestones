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

- Update to babel-preset-env
- Build header links from data in React component
- Jerky on old pc?
- Update layer filter area on window resize
- Weirdness with counter position or resize 
- Right viroid comes in from the right
- Update SVG to just provide coordinates - can be rendered in canvas or svg. Does the svg have to be added to the page? 
- get positions.js 	// Array.from({length: 4}, elem => ({x: 0, y:0}) )

/**
 * `getInterpolatedValue` provides a midpoint value
 * between y1 and y2, based on the ratio provided.
 *
 * @param {number} y1 - the value when our curve is
 *                      totally curvy
 * @param {number} y2 - the value when our curve is
 *                      totally flat
 * @param {number} x  - a value from 0 to 1 that
 *                      represents the ratio of curvy
 *                      to flat (0 = totally curvy,
 *                      1 = totally flat).
 */

```
 	@media screen and (min-width: $break-tiny) {

	}

	@media screen and (min-width: $break-small) {

	}

	@media screen and (min-width: $break-large) {
		
	}
```
