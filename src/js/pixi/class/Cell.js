import * as PIXI from 'pixi.js'

function Cell(texture, name) {
	PIXI.Sprite.call(this, texture)

	this.anchor.set(0.5)
	this.name = name
}

Cell.prototype = Object.create(PIXI.Sprite.prototype)

export default Cell
