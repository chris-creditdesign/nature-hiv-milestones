require('babel-register')({
	presets: ['react']
})

const fs = require('fs')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const tidy = require('htmltidy2').tidy;
const tidyOpts = {
	indent: true,
	wrap: 0
}

const dataLayer = require('./data/data-layer.json')
const articles = require('./data/articles/index.js')
const headerData = require('./data/header.json')
const footerData = require('./data/footer.json')
const headData = require('./data/head.json')

const props = {
	articles,
	dataLayer,
	headerData,
	footerData,
	headData
}

const Page = require('./components/page.js')

const renderedPage = ReactDOMServer.renderToStaticMarkup(
		React.createElement(Page, props)
	)

tidy(renderedPage, tidyOpts, function(err, html) {
	fs.writeFileSync('./src/html/index.html', html, 'utf8')
})
