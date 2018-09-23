import 'intersection-observer'
import scrollama from 'scrollama'
// import * as scrollstory from "../../node_modules/scrollstory/dist/jquery.scrollstory.js"
import { range } from 'd3-array'

// import loadCanvas from './pixi/function/loadCanvas'
// import updateCanvas from './pixi/function/updateCanvas'
// import resizeCanvas from './pixi/function/resizeCanvas'

import Timeline from './timeline/Timeline'
import buildOptions from './timeline/buildOptions'

// const jsonURL = "img/cells.json"
// let app
// let timeline

// function complete() {
// 	this.animationActive = false

// 	app = loadCanvas(this, jsonURL)
// 	document.getElementById("pixi-container").appendChild(app.view)

// 	const checkbox = $("#animation-control").find("input")

// 	checkbox.change(() => {
// 		this.animationActive = checkbox.prop("checked")
// 		updateCanvas(app, this)
// 	})

// }

const handleStepEnter = response => {
	console.log(response)
}

const handleStepProgress = response => {
	// console.log(response)
}

const handleContainerEnter = response => {
	// console.log(handleContainerEnter)
}

const init = () => {

	// Initiate the scrollama
	const scroller = scrollama()

	const container = document.querySelector(".stories")
	const step = Array.from(container.querySelectorAll(".story"))

	// Setup the scroller instance and pass the callback function
	scroller
		.setup({ 
			step, 
			container, 
			offset: 0.5, 
			debug: false,
			order: false,
			progress: true,
			threshold: 10
		})
		.onStepProgress(handleStepProgress)
		.onStepEnter(handleStepEnter)
		// .onContainerEnter(handleContainerEnter)


	const data = step.map( (elem,index) => {

		return {
			start: parseInt(elem.dataset.start, 10),
			end: parseInt(elem.dataset.end, 10),
			name: elem.getAttribute("id").split("-").map( s => s.charAt(0).toUpperCase() + s.slice(1) ).join(" "),
			title: elem.querySelector("h2").innerText,
			number: index + 1
		}
	})

	data.startYear = 1910
	data.endYear = 2025
	data.decades = range(data.startYear, data.endYear, 10)

	const options = buildOptions( { 
		target: "#timeline-container",
		scrollStory: this,
		data
	})

	// if (window.innerWidth >= 800) {
	const timeline = Timeline(options)
			.buildSvg()
			.buildScales()
			.buildLine()
			.buildAxis()
			.buildMilestones()
	// }

	console.log("timeline", timeline)
		
	// const timelineContainer = $("#timeline-container")

	// $('.stories').scrollStory({
	// 	autoActivateFirstItem: false,
	// 	debug: false,
	// 	triggerOffset: 0,
	// 	scrollOffset: 0,
	// 	keyboard: true,
	// 	scrollSensitivity: 50,
	// 	containerscroll: function() {
	// 		updateCanvas(app, this)
	// 		timeline && timeline.hideTooltip()
	// 	},
	// 	itemfocus: function(ev, item) {
	// 		timeline && timeline.buildMilestones(item.index)
	// 	},
	// 	complete: complete,
	// 	updateoffsets: function() {
	// 		app && resizeCanvas(app)
	// 		app && updateCanvas(app, this)
	// 		timeline && timeline.updateSvg()
	// 	},
	// 	containeractive: function() {
	// 		timelineContainer.removeClass("scrollstoryInactive")
 //  		},
 //  		containerinactive: function() {
	// 		timelineContainer.addClass("scrollstoryInactive")
 //  		}
	// })
}

export default init