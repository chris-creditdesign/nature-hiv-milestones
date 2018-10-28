import * as PIXI from 'pixi.js'

function Virus(texture) {
	PIXI.Sprite.call(this, texture)

	this.anchor.set(0.5)
	this.name = 'virus'
}

Virus.prototype = Object.create(PIXI.Sprite.prototype)

export default Virus
