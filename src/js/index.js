import '../scss/index.scss'

function checkWidth() {
	// Only load the timeline code if
	// the window is wider than 600px
	if (window.innerWidth > 600) {
		import(/* webpackChunkName: "init" */ './init').then((init) => {
			init.default()
		}).catch(error => new Error(error, 'An error occurred while loading the component'))
	}
}

document.addEventListener('DOMContentLoaded', checkWidth)
