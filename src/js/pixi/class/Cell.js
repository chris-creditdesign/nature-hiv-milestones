import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt.js'

const Cell = function(app, textures, name) {

	PIXI.Sprite.call(this, textures[name])

	this.anchor.set(0.5)
	this.name = name

	const scaleOffset = randomInt(60,100) / 100

	this.scale.set(scaleOffset, scaleOffset)

}

Cell.prototype = Object.create(PIXI.Sprite.prototype)

export default Cell