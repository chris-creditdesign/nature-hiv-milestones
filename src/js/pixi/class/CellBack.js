import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt.js'

const CellBack = function(texture) {

	/*
		If textures is an array handle as an array
	*/

	// this.textures = texture
	
	PIXI.Sprite.call(this, texture)

	this.anchor.set(0.5)
	this.name = "cell"

	// const scaleOffset = randomInt(60,100) / 100

	// this.rotation = randomInt(0,180) * Math.PI / 180

	// this.scale.set(scaleOffset, scaleOffset)

}

CellBack.prototype = Object.create(PIXI.Sprite.prototype)

export default CellBack