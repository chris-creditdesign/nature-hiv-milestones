import buildSvg from './buildSvg'
import buildPaths from './buildPaths'
import getPositions from './getPositions'
import updateSvg from './updateSvg'
import init from './init'

/**
 * `BackgroundPosition`
 	returns an object with functions to:

 	- `buildSvg` add an svg to the page - or just a virtual svg
 	- `BuildMidpoint` define a midpoint on the svg
 	- `buildPaths` add five paths to that svg, running from the outside corners
 	to the midpoint. One entry path and four exit paths. There could be a random number
 	of exit paths.

 	- `getPositons` returns an array of four x y coordinates - the positions of the cells
 	depending on how far into the sequence we are

 *
 * @param {object} options -	object containing options from
 *								buildBackgroundPositionOptions
 */

const BackgroundPosition = options => Object.assign(
	{},
	buildSvg,
	buildPaths,
	getPositions,
	updateSvg,
	init,
	options
)

export default BackgroundPosition
