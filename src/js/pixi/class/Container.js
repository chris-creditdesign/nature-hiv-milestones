import * as PIXI from 'pixi.js'
import * as filters from 'pixi-filters'

import BackgroundPosition from '../../background-position/BackgroundPosition'
import buildBackgroundPositionOptions from '../../background-position/buildBackgroundPositionOptions'
import Cell from './Cell'
import Virus from './Virus'

const Container = function(target, orientation, name, textures) {
	PIXI.Container.call(this)
	this.name = name

	const backgroundPositionOptions = buildBackgroundPositionOptions( {
		target,
		orientation
	})

	this.backgroundPositions = BackgroundPosition(backgroundPositionOptions)

	this.backgroundPositions.init()
	const x = this.backgroundPositions.midPoint.x * this.backgroundPositions.width
	const y = this.backgroundPositions.midPoint.y * this.backgroundPositions.height

	const backContainer = new PIXI.Container()
	const frontContainer = new PIXI.Container()
	const nucleusContainer = new PIXI.Container()

	Array.from({length: 4}).forEach( () => {
		const virusBack = new Virus(textures["virus-back.png"])
		const virusFront = new Virus(textures["virus-front.png"])
		const virusNucleus = new Virus(textures["virus-nucleus.png"])
		
		backContainer.addChild(virusBack)
		frontContainer.addChild(virusFront)
		nucleusContainer.addChild(virusNucleus)
	})

	const cellBack = new Cell(textures["cell-back.png"], "cell")
	cellBack.x = x
	cellBack.y = y
	const cellFront = new Cell(textures["cell-front.png"], "cell")
	cellFront.x = x
	cellFront.y = y
	const cellFrontInfected = new Cell(textures["cell-front-infected.png"], "cell-front-infected")
	cellFrontInfected.x = x
	cellFrontInfected.y = y
	cellFrontInfected.alpha = 0
	const cellNucleus = new Cell(textures["cell-nucleus.png"], "cell")
	cellNucleus.x = x
	cellNucleus.y = y

	backContainer.addChild(cellBack)
	frontContainer.addChild(cellFront, cellFrontInfected)
	nucleusContainer.addChild(cellNucleus)

	/*
	** Displacement filter 
	*/

	const displacementSprite = new PIXI.Sprite.fromImage('img/water.png')
	displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

	const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite)
	displacementFilter.scale.x = 0
	displacementFilter.scale.y = 0

	this.filters = [displacementFilter]

	this.addChild(backContainer, frontContainer, nucleusContainer, displacementSprite)

}

Container.prototype = Object.create(PIXI.Container.prototype)

export default Container