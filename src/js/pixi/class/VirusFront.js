import * as PIXI from 'pixi.js'

const VirusFront = function(app, textures) {

	PIXI.Sprite.call(this, textures["virus.png"])

	this.anchor.set(0.5)
	this.name = "virus"

	const scaleOffset = randomInt(60,100) / 100

	this.scale.set(scaleOffset, scaleOffset)

}

VirusFront.prototype = Object.create(PIXI.Sprite.prototype)

export default VirusFront