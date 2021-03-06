import 'intersection-observer'
import scrollama from 'scrollama'
import { event } from 'd3-selection'
import { range } from 'd3-array'

import Timeline from './timeline/Timeline'
import buildTimelineOptions from './timeline/buildTimelineOptions'

import loadCanvas from './pixi/function/loadCanvas'
import updateCanvas from './pixi/function/updateCanvas'
import resizeCanvas from './pixi/function/resizeCanvas'
import debounce from './helpers/debounce'

const jsonURL = 'img/hiv-cells.json'

const init = () => {
	// Initiate the scrollama
	const scroller = scrollama()
	let app
	let scrollerActive = false
	let timeline
	let counter = 0

	const container = document.querySelector('.js-stories')
	const step = Array.from(container.querySelectorAll('.js-story')).filter(elem => elem.dataset.start)

	let data = step.map((elem, index) => ({
		start: elem.dataset.start ? parseInt(elem.dataset.start, 10) : null,
		end: elem.dataset.end ? parseInt(elem.dataset.end, 10) : null,
		concurrentAtTime: 0,
		id: elem.getAttribute('id'),
		name: elem.getAttribute('id').split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
		title: elem.querySelector('h2').innerText,
		number: index + 1
	}))

	// .filter( elem => elem.start )

	// Presuming there is a maximum two milestones on the same start date
	// add a second/move left attribute to the second one
	data = data.map((elem, index, arr) => {
		const { start } = elem
		const newElem = elem
		const { length } = arr.slice(0, index).filter(item => item.start === start)
		if (length) {
			newElem.concurrentAtTime = length
		}
		return newElem
	})

	data.startYear = 1980
	data.endYear = 2020
	data.decades = range(data.startYear, data.endYear, 5)

	function handleStepEnter(response) {
		if (timeline) {
			timeline.buildMilestones(response.index)
		}
	}

	function handleScroll() {
		if (!scrollerActive) {
			scrollerActive = true
			scroller.enable()
		}
		window.removeEventListener('scroll', handleScroll, true)
	}

	function handleClick(d, i) {
		// Disable the scroller on anchor link scroll
		// intersection Observer is not fast enough to keep up
		scroller.disable()
		scrollerActive = false

		step[i].scrollIntoView()
		step[i].querySelector('h2')
			.focus()

		timeline.buildMilestones(i)

		// Once the page has updated re enable the scroller
		// when the user scrolls again via handleScroll again
		window.setTimeout(() => {
			// Just to make sure the correct timeline is highlighted
			timeline.buildMilestones(i)
			window.addEventListener('scroll', handleScroll, true)
		}, 250)
	}

	// Setup the scroller instance and pass the callback function
	scroller
		.setup({
			step,
			container,
			offset: 0.5,
			debug: false,
			order: false,
			progress: true,
			threshold: 20
		})
		.onStepProgress((response) => {
			const { index, progress } = response
			const section = 1 / step.length
			const stepsSoFar = index / step.length
			const thisStepProgress = section * progress
			counter = stepsSoFar + thisStepProgress

			updateCanvas(app, counter)
		})
		.onStepEnter(handleStepEnter)

	scrollerActive = true

	const timelineOptions = buildTimelineOptions({
		target: '#js-timeline-container',
		data
	})

	// https://davidwalsh.name/css-supports
	const supportsCSS = !!((window.CSS && window.CSS.supports) || window.supportsCSS || false)

	if (supportsCSS) {
		const supportsSticky = CSS.supports('position', 'sticky') || CSS.supports('position', '-webkit-sticky')

		if (supportsSticky) {
			timeline = Timeline(timelineOptions)
				.buildSvg()
				.buildScales()
				.buildLine()
				.buildAxis()
				.buildMilestones()

			timeline.milestoneContainer
				.selectAll('a')
				.on('click', (d, i) => {
					event.preventDefault()
					handleClick(d, i)
				})
		}
	}

	// Initiate the PIXI canvas
	app = loadCanvas(jsonURL)
	document.getElementById('js-pixi-container').appendChild(app.view)

	window.addEventListener('resize', debounce(
		() => {
			if (timeline) {
				timeline.updateSvg()
			}
			if (app) {
				resizeCanvas(app, counter)
			}
		}, 250
	))
}

export default init
