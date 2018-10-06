import * as PIXI from 'pixi.js'

import BackgroundPosition from '../../background-position/BackgroundPosition'
import buildBackgroundPositionOptions from '../../background-position/buildBackgroundPositionOptions'


const Container = function(target, orientation, name, alpha) {
	PIXI.Container.call(this)
	this.name = name

	const backgroundPositionOptions = buildBackgroundPositionOptions( {
		target,
		orientation
	})

	this.backgroundPositions = BackgroundPosition(backgroundPositionOptions)

	this.backgroundPositions.init()

	const width = this.backgroundPositions.width
	const height = this.backgroundPositions.height

	// const alphaFilter = new PIXI.filters.AlphaFilter(alpha)
	
	// this.filterArea = new PIXI.Rectangle(0, 0, width, height)
	// this.filters = [alphaFilter]

}

Container.prototype = Object.create(PIXI.Container.prototype)


export default Container