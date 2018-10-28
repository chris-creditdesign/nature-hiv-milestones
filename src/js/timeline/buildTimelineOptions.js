function buildTimelineOptions({
	width = 120,
	height,
	margins = {
		top: 40, left: 10, bottom: 10, right: 10
	},
	data = [],
	target = 'body'
} = {}) {
	const options = {}

	options.totalWidth = width
	options.totalHeight = height || window.innerHeight
	options.margins = margins
	options.width = options.totalWidth - options.margins.left - options.margins.right
	options.height = options.totalHeight - options.margins.top - options.margins.bottom
	options.data = data
	options.target = target
	options.tooltip = document.getElementById('tooltip')

	return options
}

export default buildTimelineOptions
