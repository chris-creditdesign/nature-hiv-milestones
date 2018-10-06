import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt.js'

const Cell = function(app, textures, index) {

	PIXI.Sprite.call(this, textures[Object.keys(textures)[index]])

	this.anchor.set(0.5)

	this.xOffset = Math.random()
	this.yOffset = Math.random()

	// // this.scaleOffset = window.innerWidth < 600 ? 0.5 : 1

	this.x = this.startX = this.xOffset * app.screen.width
	this.y = this.startY = this.yOffset * app.screen.height
	this.rotation = this.startRotation = Math.random() * Math.PI * 2
	
	// if (window.innerWidth < 600) {
	// 	this.scale.set(this.scaleOffset, this.scaleOffset)
	// }

}

Cell.prototype = Object.create(PIXI.Sprite.prototype)

export default Cell