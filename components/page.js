const React = require('react')
const Head = require('./head.js')
const Header = require('./header.js')
const Article = require('./article.js')
const Footer = require('./footer.js')
const VideoArticle = require('./video-article.js')

const Page = ({ articles, dataLayer, headerData, footerData, headData }) => {

		const renderedArticles = articles.map( article => {
			if ( article.main.data.articleType === 'image') {
				return (
					<li key={article.main.data.id}>
						<Article
							key={article.main.data.id}
							id={article.main.data.id}
							articleType={article.main.data.articleType}
							secondary={article.main.data.secondary}
							inner={article.main.data.inner}
							start={article.main.data.start}
							end={article.main.data.end}
							title={article.main.data.title}
							URL={article.main.data.URL}
							headline={article.main.data.headline}
							imgURL={article.main.data.imgURL}
							imgCredit={article.main.data.imgCredit}
							imgAlt={article.main.data.imgAlt}
							content={article.main.content}
							authorList={article.main.data.authorList}
							containsSecondary={article.secondary}
						/>
					</li>
				)
			} else {
				return (
					<li key={article.main.data.id}>
						<VideoArticle
							id={article.main.data.id}
							articleType={article.main.data.articleType}
							videoId={article.main.data.videoId}
							secondary={article.main.data.secondary}
							inner={article.main.data.inner}
							title={article.main.data.title}
							headline={article.main.data.headline}
							content={article.main.content}

						/>
					</li>
				)
			}

		})

		return (
			<html lang='en'>
				<Head 
					dataLayer={dataLayer} 
					title={headData.title}
					url={headData.url}
					description={headData.description}
					image={headData.image}
					twitterHandle={headData.twitterHandle} />
				<body>

					<div className='bg-container' id='js-bg-container' role='presentation' aria-hidden='true'></div>
					<div className='pixi-container' id='js-pixi-container' role='presentation' aria-hidden='true'></div>

					<Header 
						navlist={headerData.navlist} />
					
					<section className='article-container js-stories' role='main'>

						<div className='timeline-container' id='js-timeline-container' role='navigation' aria-label='Secondary'>
							<div id='tooltip' className='timeline-container__tooltip timeline-container__tooltip--hidden' role='presentation' aria-hidden='true'>
								<p id='tooltip-tag'></p>
								<p id='tooltip-title'></p>
							</div>
						</div>
						
						<ol className='article-container__list'>
							{renderedArticles}
						</ol>

						<aside className='advert'>
							<a href='pdf/milestones-in-hiv.pdf'>
								<figure className='advert__figure'>
									<img
										className='advert__image'
										src='img/nature-hiv-pdf-download.jpg' 
										alt='Download the Milestones in HIV pdf.' />
									<figcaption
										className='advert__caption'
										>PDF of all milestones</figcaption>
								</figure>
							</a>
						</aside>
						
					</section>

					<Footer blurb={footerData.blurb} />

				</body>

			</html>
		)
}

module.exports = Page
