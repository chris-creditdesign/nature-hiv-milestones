import { select } from 'd3-selection'

function buildSvg() {
	this.svg = select(this.target).append('svg')
		.attr('class', 'timeline')
		.attr('width', this.totalWidth)
		.attr('height', this.totalHeight)
		.attr('roll', 'group')
		.attr('aria-label', 'Milestones timeline')
		.attr('focusable', 'false')

	this.svg
		.append('title')
		.attr('id', 'timeline-title')
		.text('Milestones in HIV')

	this.axisContainer = this.svg.append('g')
		.attr('class', 'axisContainer')
		.attr('transform', `translate(${this.margins.left},${this.margins.top})`)
		.attr('role', 'presentation')
		.attr('aria-hidden', 'true')

	this.milestoneContainer = this.svg.append('g')
		.attr('class', 'milestoneContainer')
		.attr('transform', `translate(${this.margins.left},${this.margins.top})`)

	return this
}

export default { buildSvg }
