import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt.js'

const Cell = function(app, textures) {

	this.textures = [textures["t-cell.png"], textures["dead-cell.png"]]
	
	PIXI.Sprite.call(this, this.textures[0])

	this.anchor.set(0.5)
	this.name = "cell"

	const scaleOffset = randomInt(60,100) / 100

	this.rotation = randomInt(0,180) * Math.PI / 180

	this.scale.set(scaleOffset, scaleOffset)

}

Cell.prototype = Object.create(PIXI.Sprite.prototype)

export default Cell