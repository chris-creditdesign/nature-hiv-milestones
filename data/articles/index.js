const fs = require('fs')
const marked = require('marked')
const matter = require('gray-matter');

marked.setOptions({
	headerIds: false,
	smartypants: true,
	breaks: true
})

const articles = [
	{
		main: './data/articles/milestone-1.md',
		secondary: './data/articles/video-1.md'
	},
	{
		main: './data/articles/milestone-2.md',
		secondary: './data/articles/video-2.md'
	},
	{
		main: './data/articles/milestone-3.md'
	},
	{
		main: './data/articles/milestone-4.md'
	},
	{
		main: './data/articles/milestone-5.md'
	},
	{
		main: './data/articles/extra-1.md'
	},
	{
		main: './data/articles/milestone-6.md'
	},
	{
		main: './data/articles/extra-2.md'
	},
	{
		main: './data/articles/milestone-7.md'
	},
	{
		main: './data/articles/milestone-8.md',
		secondary: './data/articles/video-2.md'
	},
	{
		main: './data/articles/milestone-9.md'
	},
	{
		main: './data/articles/milestone-10.md'
	},
	{
		main: './data/articles/extra-3.md'
	},
	{
		main: './data/articles/milestone-11.md'
	},
	{
		main: './data/articles/extra-4.md'
	},
	{
		main: './data/articles/milestone-12.md'
	},
	{
		main: './data/articles/milestone-13.md'
	},
	{
		main: './data/articles/milestone-14.md'
	},
	{
		main: './data/articles/milestone-15.md'
	},
	{
		main: './data/articles/milestone-16.md'
	},
	{
		main: './data/articles/milestone-17.md'
	},
	{
		main: './data/articles/extra-5.md'
	},
	{
		main: './data/articles/milestone-18.md'
	},
	{
		main: './data/articles/extra-6.md'
	},
	{
		main: './data/articles/milestone-19.md'
	},
	{
		main: './data/articles/milestone-20.md'
	},
	{
		main: './data/articles/milestone-21.md'
	}
]


module.exports = articles.map( article => {
	const mainFile = fs.readFileSync(article.main, 'utf8')
	const main = matter(mainFile)

	if (article.secondary) {
		const secondaryFile = fs.readFileSync(article.secondary, 'utf8')
		const secondary = matter(secondaryFile)

		return { main, secondary}
	} else {
		return { main, secondary: false }
	}
})
