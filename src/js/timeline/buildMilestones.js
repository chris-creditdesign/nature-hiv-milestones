function addMilestones(selection, timeline, index = 0) {

	selection
		.exit().remove()

	selection
		.enter()
	  .append("a")
	  	.attr("href", d => `#${d.id}`)
	  	.attr("aria-label", d => `${d.start}${d.end ? `-${d.end}`: ''} ${d.name} ${d.title}`)
		.attr("aria-current", (d,i) => {
			return i === index ? "current" : null
		})
	  	.attr("role", "link")
		.on("click", (d) => {
			event.preventDefault()
			document.getElementById(d.id)
				.scrollIntoView({ block: 'start',  behavior: 'smooth' })
		})
	  .append("circle")
		.attr("cx", d => {
			if (d.concurrentAtTime) {
				return timeline.width * 0.75 + timeline.width / 5
			} else {
				return timeline.width * 0.75
			}
			
		})
		.attr("cy", d => timeline.timeScale(d.start))
		.attr("r", timeline.width / 10)
		.on("mouseenter", (d) => {
			
			document.getElementById("tooltip-title")
				.innerText = d.title
			document.getElementById("tooltip-tag")
				.innerText = `${d.name} (${d.start}${d.end ? `-${d.end}`: ""})`

			timeline.tooltip.style.top = timeline.timeScale(d.start) + timeline.margins.top - (timeline.tooltip.offsetHeight / 2) + "px"

			document.getElementById("tooltip").classList.remove("hidden")
		})
		.on("mouseleave", () => {
			document.getElementById("tooltip").classList.add("hidden")
		})

	selection
		.attr("aria-current", (d,i) => {
			return i === index ? "milestone" : null
		})

}

const buildMilestones = function(index) {

	this.milestoneContainer.selectAll("a")
		.data(this.data, d => d.start)
		.call(addMilestones, this, index)

	return this
}

export default { buildMilestones }