import * as PIXI from 'pixi.js'

const AlphaContainer = function() {
	PIXI.Container.call(this)

	this.name = "alpha"

	// const width = this.backgroundPositions.width
	// const height = this.backgroundPositions.height

	// const alphaFilter = new PIXI.filters.AlphaFilter(alpha)
	
	// this.filterArea = new PIXI.Rectangle(0, 0, width, height)
	// this.filters = [alphaFilter]

} 

AlphaContainer.prototype = Object.create(PIXI.Container.prototype)

export default AlphaContainer