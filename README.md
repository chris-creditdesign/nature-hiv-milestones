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


- Right viroid comes in from the right
- Make timeline buttons work
- Cell to cell transmission 
- Add mottled effect, ripples, dotted shading... 

- Apply filter just to container
- Add nucleus group
- Add cell to cell transmission
- Make cell die after budding

- Update SVG to just provide coordinates - can be rendered in canvas or svg. Does the svg have to be added to the page? 
- Add pa11y test
- Remove modernizr
- No js class on body?
- Re do CSS as BEM
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

