function updateSvg() {
	const newHeight = this.height !== document.documentElement.clientHeight
	const newWidth = this.width !== document.documentElement.clientWidth
	if (newHeight || newWidth) {
		this.svg.remove()

		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight

		this.init()
	}

	return this
}

export default { updateSvg }
