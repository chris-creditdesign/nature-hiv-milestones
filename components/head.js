const React = require('react')

const Head = ({ 
		dataLayer, 
		title,
		url,
		description,
		image,
		twitterHandle
	}) => {
	const dataLayerScript = 'dataLayer = ' + JSON.stringify(dataLayer)

	return (
		<head>
			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
			<title>{title}</title>

			<meta name='description' content={description} />

			<meta property='og:url' content={url} />
			<meta property='og:type' content='article' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />

			<meta name='twitter:card' content='summary_large_image'/>
			<meta name='twitter:site' content={twitterHandle} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />

			<script dangerouslySetInnerHTML={{__html: dataLayerScript}}></script>
			<script src='//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>
			<script src='//nexus.ensighten.com/npg/Bootstrap.js'></script>

		</head>
		)
}

module.exports = Head

