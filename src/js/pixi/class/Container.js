import * as PIXI from 'pixi.js'
import * as filters from 'pixi-filters'

import BackgroundPosition from '../../background-position/BackgroundPosition'
import buildBackgroundPositionOptions from '../../background-position/buildBackgroundPositionOptions'
import Cell from './Cell'
import Virus from './Virus'

const Container = function(target, orientation, name, textures, connecting = false) {
	PIXI.Container.call(this)
	this.name = name

	const backgroundPositionOptions = buildBackgroundPositionOptions( {
		target,
		orientation
	})

	this.backgroundPositions = BackgroundPosition(backgroundPositionOptions)

	this.backgroundPositions.init()
	// const x = this.backgroundPositions.midPoint.x * this.backgroundPositions.width
	// const y = this.backgroundPositions.midPoint.y * this.backgroundPositions.height

	/*
	** 4 Viruses
	*/
	const virusBackContainer = new PIXI.Container()
	const virusFrontContainer = new PIXI.Container()
	const virusNucleusContainer = new PIXI.Container()

	Array.from({length: 4}).forEach( () => {
		const virusBack = new Virus(textures["virus-back.png"])
		virusBackContainer.addChild(virusBack)
		
		const virusFront = new Virus(textures["virus-front.png"])
		virusFrontContainer.addChild(virusFront)
		
		const virusNucleus = new Virus(textures["virus-nucleus.png"])
		virusNucleusContainer.addChild(virusNucleus)
	})

	/*
	** Cell layers {back, front, infected, nucleus}
	*/
	const cellBackContainer = new PIXI.Container()
	const cellFrontContainer = new PIXI.Container()
	const cellNucleusContainer = new PIXI.Container()

	const cellBack = new Cell(textures["cell-back.png"], "cell")
	// cellBack.x = x
	// cellBack.y = y
	
	cellBackContainer.addChild(cellBack)
	
	const cellFront = new Cell(textures["cell-front.png"], "cell")
	// cellFront.x = x
	// cellFront.y = y
	
	const cellFrontInfected = new Cell(textures["cell-front-infected.png"], "cell-front-infected")
	// cellFrontInfected.x = x
	// cellFrontInfected.y = y
	cellFrontInfected.alpha = 0
	
	cellFrontContainer.addChild(cellFront, cellFrontInfected)
	
	const cellNucleus = new Cell(textures["cell-nucleus.png"], "cell")
	// cellNucleus.x = x
	// cellNucleus.y = y
	
	cellNucleusContainer.addChild(cellNucleus)

	if (connecting) {
		const connectingCellBack = new Cell(textures["cell-back.png"], "connecting-cell")

		cellBackContainer.addChild(connectingCellBack)
		
		const connectingCellFront = new Cell(textures["cell-front.png"], "connecting-cell")
		const connectingCellFrontInfected = new Cell(textures["cell-front-infected.png"], "connecting-cell-front-infected")
		connectingCellFrontInfected.alpha = 0

		cellFrontContainer.addChild(connectingCellFront, connectingCellFrontInfected)

		const connectingCellNucleus = new Cell(textures["cell-nucleus.png"], "connecting-cell")
		
		cellNucleusContainer.addChild(connectingCellNucleus)
	}

	/*
	** Displacement filter 
	*/
	const displacementSprite = new PIXI.Sprite.fromImage('img/water.png')
	displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

	this.displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite)
	this.displacementFilter.scale.x = 0
	this.displacementFilter.scale.y = 0

	cellBackContainer.filters = [this.displacementFilter]
	cellFrontContainer.filters = [this.displacementFilter]
	cellNucleusContainer.filters = [this.displacementFilter]

	/*
	**	Add all the containers to the main container
	**	and the displacementSprite, which isn't visible 
	** 	but needs to be on the stage.
	*/
	this.addChild(
			virusBackContainer,
			cellBackContainer,
			virusFrontContainer,
			cellFrontContainer,
			virusNucleusContainer,
			cellNucleusContainer,
			displacementSprite
		)

}

Container.prototype = Object.create(PIXI.Container.prototype)

export default Container