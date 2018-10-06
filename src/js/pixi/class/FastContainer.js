import * as PIXI from 'pixi.js'

import BackgroundPosition from '../../background-position/BackgroundPosition'
import buildBackgroundPositionOptions from '../../background-position/buildBackgroundPositionOptions'

const options = {
	scale: true,
	position: true,
	rotation: true
}

const FastContainer = function(target, orientation, name) {
	PIXI.particles.ParticleContainer.call(this, 100, options)
	this.name = name

	const backgroundPositionOptions = buildBackgroundPositionOptions( {
		target,
		orientation
	})

	this.backgroundPositions = BackgroundPosition(backgroundPositionOptions)

	this.backgroundPositions.init()

}

FastContainer.prototype = Object.create(PIXI.particles.ParticleContainer.prototype)

export default FastContainer