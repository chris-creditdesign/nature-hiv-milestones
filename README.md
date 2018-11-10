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

- Three dots
- Leading video no date
- Jerky on old pc?

- Make sure distortion filter is uniform
- Remove no js from header

- Distortion filter area
- Make animation on by default
- Move ensighten script to top
- Accessibility questions
- Sort out amount of distortion on scroll
- Remove alpha filter, use darker sprites instead
- Update layer filter area on window resize
- Weirdness with counter position or resize 
- Remove trailing line from timeline
- Cell to cell transmission 
- Add mottled effect, ripples, dotted shading... 
- Add side by side dot, for matching dates
- Right viroid comes in from the right


- Add cell to cell transmission
- Add pa11y test
- Add eslint test

- Update SVG to just provide coordinates - can be rendered in canvas or svg. Does the svg have to be added to the page? 
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

```
 	@media screen and (min-width: $break-tiny) {

	}

	@media screen and (min-width: $break-small) {

	}

	@media screen and (min-width: $break-large) {
		
	}
```
