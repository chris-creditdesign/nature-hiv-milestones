import * as PIXI from 'pixi.js'
import Cell from './Cell'
import randomInt from '../../helpers/randomInt'

function VirusContainer(width, height, textures, number, imageName) {
	PIXI.Container.call(this)

	this.name = 'alpha'

	Array.from({ length: number }).forEach(() => {
		const cell = new Cell(textures[imageName], 'viroid')
		const scale = randomInt(50, 100) / 100

		cell.offSetX = Math.random()
		cell.offSetY = Math.random()
		cell.x = cell.offSetX * width
		cell.y = cell.offSetY * height

		cell.scale.x = scale
		cell.scale.y = scale

		this.addChild(cell)
	})
}

VirusContainer.prototype = Object.create(PIXI.Container.prototype)

export default VirusContainer
