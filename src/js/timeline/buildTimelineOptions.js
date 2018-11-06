function buildTimelineOptions({
	width = 135,
	height,
	margins = {
		top: 40, left: 10, bottom: 10, right: 10
	},
	milestoneRadius = 10,
	milestoneXPositon = 65,
	data = [],
	target = 'body'
} = {}) {
	const options = {}

	options.totalWidth = width
	options.totalHeight = height || window.innerHeight
	options.margins = margins
	options.milestoneXPositon = milestoneXPositon
	options.milestoneRadius = milestoneRadius
	options.width = options.totalWidth - options.margins.left - options.margins.right
	options.height = options.totalHeight - options.margins.top - options.margins.bottom
	options.data = data
	options.target = target
	options.tooltip = document.getElementById('tooltip')

	return options
}

export default buildTimelineOptions
