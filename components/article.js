const React = require('react')
const VideoArticle = require('./video-article.js')

function makeClassName(start, secondary, inner ) {
	const jsStory = start ? 'js-story' : ''
	const articleSecondary = secondary ? 'article--secondary' : ''
	const articleInner = inner ? 'article--inner' : ''
	return `article article--with-image ${jsStory} ${articleSecondary} ${articleInner}`
}

const Article = ({ 
		id, 
		articleType,
		secondary,
		inner, 
		start, 
		end, 
		title, 
		URL, 
		headline,
		imgURL,
		imgCredit,
		imgAlt,
		content,
		authorList,
		containsSecondary }) => (
			<article id={id}
					className={makeClassName(start, secondary, inner)}
					data-start={start} 
					data-end={end} >

				<header className='article__header-flex-container'>
					{title.length 
						? <p className='article-type'>{title} 
							<span className='date'>{end ? ` (${start}-${end})` :` (${start})`}</span>
						</p>
						: <p className='article-type'> 
							<span className='date'>{end ? `${start}-${end}` :` ${start}`}</span>
						</p>

					}


					{URL.length
						? <h2 tabIndex='-1'>
							<a href={URL} dangerouslySetInnerHTML={{__html: headline}}></a>					
						</h2 >
						: <h2 tabIndex='-1' dangerouslySetInnerHTML={{__html: headline}}></h2>
					}

				</header>

				{ imgURL 
					? <figure className='article__image-flex-container'>
						<img src={imgURL} alt={imgAlt} />
						<figcaption className='article__credit'>{imgCredit}</figcaption>
					</figure>
					: null
				}
				
				<section className='article__text-flex-container'>

					<p dangerouslySetInnerHTML={{__html: content}}></p>
					
					<ul className='article__author-list'>
						{authorList ?
							authorList.map( (author) => 
								<li 
									key={author}
									className='article__author-list__item'>
										{author}
								</li>
							)
							: null
						}
					</ul>
				</section>

				{ containsSecondary 
					? <VideoArticle
						id={containsSecondary.data.id}
						articleType={containsSecondary.data.articleType}
						videoId={containsSecondary.data.videoId}
						secondary={containsSecondary.data.secondary}
						inner={containsSecondary.data.inner}
						title={containsSecondary.data.title}
						headline={containsSecondary.data.headline}
						content={containsSecondary.content} />
					: null
				}

			</article>
	)


module.exports = Article
