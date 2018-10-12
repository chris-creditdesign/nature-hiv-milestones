import * as PIXI from 'pixi.js'
import randomInt from '../../helpers/randomInt'
import Cell from './Cell'

const AlphaContainer = function(width, height, textures) {
	PIXI.Container.call(this)

	this.name = "alpha"

	// const width = this.backgroundPositions.width
	// const height = this.backgroundPositions.height

	// const alphaFilter = new PIXI.filters.AlphaFilter(alpha)
	
	// this.filterArea = new PIXI.Rectangle(0, 0, width, height)
	// this.filters = [alphaFilter]

	Array.from({length: 20}).forEach( () => {
		const cell = new Cell(textures["cell-complete.png"], "cell")

		cell.x = randomInt(0,width)
		cell.y = randomInt(0,height)
		cell.alpha = randomInt(15,30) / 100

		this.addChild(cell)
	})

} 

AlphaContainer.prototype = Object.create(PIXI.Container.prototype)

export default AlphaContainer