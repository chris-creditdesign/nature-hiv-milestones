/* eslint-disable no-mixed-spaces-and-tabs, no-param-reassign */
function showTooltip(d, timeline) {
	const { title, name, start, end, concurrentAtTime } = d
	let tooltipTagText = ''

	document.getElementById('tooltip-title')
		.innerText = title

	if ( d.name.includes('Milestone') ) {
		tooltipTagText = `${name} (${start}${end ? `-${end}` : ''})`
	} else {
		tooltipTagText = `${start}${end ? `-${end}` : ''}`
	}

	document.getElementById('tooltip-tag')
		.innerText = tooltipTagText

	timeline.tooltip.style.top = `${timeline.timeScale(start) + timeline.margins.top - (timeline.tooltip.offsetHeight / 2)}px`
	timeline.tooltip.style.left = `${timeline.milestoneXPositon + (timeline.milestoneRadius * 2 * concurrentAtTime) + 30}px`

	document.getElementById('tooltip').classList.remove('timeline-container__tooltip--hidden')
}

function hideTooltip() {
	document.getElementById('tooltip').classList.add('timeline-container__tooltip--hidden')
}

function addMilestones(selection, timeline, index = 0) {
	selection
		.exit().remove()

	selection
		.enter()
	  .append('a')
	  	.attr('class', 'milestone-link')
	  	.attr('id', d => `${d.id}-link`)
	  	.attr('xlink:xlink:href', d => `#${d.id}`)
		.attr('aria-current', null)
		.attr('aria-labelledby', 'tooltip')
		.attr('role', 'link')
		.on('mouseenter', d => showTooltip(d, timeline))
		.on('focus', d => showTooltip(d, timeline))
		.on('mouseleave', () => hideTooltip())
		.on('blur', () => hideTooltip())
	  .append('circle')
		.attr('cx', d => timeline.milestoneXPositon + (timeline.milestoneRadius * 2 * d.concurrentAtTime))
		.attr('cy', d => timeline.timeScale(d.start))
		.attr('r', timeline.milestoneRadius)

	selection
		.attr('aria-current', (d, i) => (i === index ? 'step' : null))
}

function buildMilestones(index) {
	this.milestoneContainer.selectAll('a')
		.data(this.data, d => d.id)
		.call(addMilestones, this, index)

	return this
}

export default { buildMilestones }
