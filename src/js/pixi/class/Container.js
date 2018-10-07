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

}

Container.prototype = Object.create(PIXI.Container.prototype)

export default Container