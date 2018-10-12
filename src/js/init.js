import 'intersection-observer'
import scrollama from 'scrollama'
import { range } from 'd3-array'

import Timeline from './timeline/Timeline'
import buildTimelineOptions from './timeline/buildTimelineOptions'

import loadCanvas from './pixi/function/loadCanvas'
import updateCanvas from './pixi/function/updateCanvas'

const jsonURL = "img/hiv-cells.json"

// let app
// let timeline

// function complete() {

// 	app = loadCanvas(this, jsonURL)
// 	document.getElementById("pixi-container").appendChild(app.view)

let animationActive = false
const checkbox = document.getElementById("animations")

checkbox.addEventListener("change", function(){ 
	animationActive = this.checked
})

// 	checkbox.change(() => {
// 		this.animationActive = checkbox.prop("checked")
// 		updateCanvas(app, this)
// 	})

// }

const handleStepEnter = response => {
	// console.log(response)
}

// const handleStepProgress = response => {
// 	const { index, progress } = response
// 	const section = 1 / step.length
// 	const stepsSoFar = index / step.length
// 	const thisStepProgress = section * progress
// 	counter = stepsSoFar + thisStepProgress
// }

const handleContainerEnter = response => {
	// console.log(handleContainerEnter)
}

const init = () => {

	// Initiate the scrollama
	const scroller = scrollama()

	const container = document.querySelector(".stories")
	const step = Array.from(container.querySelectorAll(".story"))

	const data = step.map( (elem,index) => {

		return {
			start: parseInt(elem.dataset.start, 10),
			end: parseInt(elem.dataset.end, 10),
			id: elem.getAttribute("id"),
			name: elem.getAttribute("id").split("-").map( s => s.charAt(0).toUpperCase() + s.slice(1) ).join(" "),
			title: elem.querySelector("h2").innerText,
			number: index + 1
		}
	})

	data.startYear = 1910
	data.endYear = 2025
	data.decades = range(data.startYear, data.endYear, 10)

	const timelineOptions = buildTimelineOptions( { 
		target: "#timeline-container",
		data
	})

	// if (window.innerWidth >= 800) {
	const timeline = Timeline(timelineOptions)
			.buildSvg()
			.buildScales()
			.buildLine()
			.buildAxis()
			.buildMilestones()
	// }


	// Initiate the PIXI canvas 
	const app = loadCanvas(jsonURL)
	document.getElementById("pixi-container").appendChild(app.view)

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
		.onStepProgress( response => {
				const { index, progress } = response
				const section = 1 / step.length
				const stepsSoFar = index / step.length
				const thisStepProgress = section * progress
				const counter = stepsSoFar + thisStepProgress

				if (animationActive) {
					updateCanvas(app, counter)
				}

		})
		// .onStepEnter(handleStepEnter)
		// .onContainerEnter(handleContainerEnter)


}

export default init