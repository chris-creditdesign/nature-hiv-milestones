import * as PIXI from 'pixi.js'
import Cell from './Cell'

function AlphaContainer(width, height, textures, number, imageName) {
	PIXI.Container.call(this)

	this.name = 'alpha'

	Array.from({ length: number }).forEach(() => {
		const cell = new Cell(textures[imageName], 'cell')

		cell.offSetX = Math.random()
		cell.offSetY = Math.random()
		cell.x = cell.offSetX * width
		cell.y = cell.offSetY * height

		this.addChild(cell)
	})
}

AlphaContainer.prototype = Object.create(PIXI.Container.prototype)

export default AlphaContainer
