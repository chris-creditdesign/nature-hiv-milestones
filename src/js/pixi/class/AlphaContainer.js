import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt'
import Cell from './Cell'

const AlphaContainer = function(width, height, textures, number, blur, alpha) {
	PIXI.Container.call(this)

	this.name = "alpha"

	const alphaFilter = new PIXI.filters.AlphaFilter(alpha)
	
	const blurFilter = new PIXI.filters.BlurFilter(blur)
	this.filterArea = new PIXI.Rectangle(0, 0, width, height)
	this.filters = [blurFilter, alphaFilter]

	Array.from({length: number}).forEach( () => {
		const cell = new Cell(textures["cell-complete.png"], "cell")

		cell.offSetX = Math.random()
		cell.offSetY = Math.random()
		cell.x = cell.offSetX * width
		cell.y = cell.offSetY * height

		this.addChild(cell)
	})

} 

AlphaContainer.prototype = Object.create(PIXI.Container.prototype)

export default AlphaContainer