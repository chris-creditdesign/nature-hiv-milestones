const React = require('react')

function makeClassName(start, secondary, inner ) {
	const jsStory = start ? 'js-story' : ''
	const articleSecondary = secondary ? 'article--secondary' : ''
	const articleInner = inner ? 'article--inner' : ''
	return `article article--with-video ${jsStory} ${articleSecondary} ${articleInner}`
}

const VideoArticle = ({ 
		id,
		articleType,
		videoId,
		secondary,
		inner,
		start,
		end,
		title,
		headline,
		content }) => (
			<article id={id} 
				className={makeClassName(start, secondary, inner)} >
				<p className='article-type'>{title}</p>

				<h2>{headline}</h2>
				
				<div className='video-wrapper'>
					<iframe 
						title={id} 
						width='560' 
						height='315' 
						src={`https://www.youtube.com/embed/${videoId}?rel=0&amp;controls=1&amp;showinfo=0&amp;cc_load_policy=1` }
						frameBorder='0' 
						allow='encrypted-media' 
						allowFullScreen >
					</iframe>
				</div>

				<p>{content}</p>

			</article>

	)


module.exports = VideoArticle
