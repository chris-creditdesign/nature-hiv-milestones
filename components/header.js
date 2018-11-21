const React = require('react')

const Header = ({ navlist }) => {
	const links = navlist.map( link => (
			<li key={link.name}
				className='header__nav__list__item' >
				<a href={link.url}
					aria-current={link.current ? 'page' : null} >
					{link.name}
				</a>
			</li>

		))

	return (
		<header className='header'>
			<div className='header__banner'>
				<a href='https://www.nature.com/'>
				
					<svg width='165px' height='20px' viewBox='0 0 165 20'>
						<title>Nature.com</title>
						<g stroke='none' fill='#FFFFFF'>
							<path d="M16.3 5c.6.9.7 2.7.7 3.9v5.2c0 4.5 0 4.4 1.6 4.8.4.1.9.1.9.4 0 .3-.3.3-.7.3s-2.5-.1-3.5-.1-3.2.1-3.7.1c-.6 0-.9 0-.9-.2 0-.3.7-.3 1.3-.5.7-.3 1.2-.4 1.3-1.4s.1-2.3.1-5.1c0-3.4 0-5.3-.7-6.2-.8-.9-1.6-1.2-3-1.2s-2.6 1-3.1 1.7c-.7 1.2-.7 3.5-.7 5.7 0 3 0 4.3.2 5.3.1.5.5.8 1.1 1.1.4.2 1.2.3 1.2.6s-.5.3-.8.3c-.4 0-3-.1-3.6-.1s-3.4.1-3.7.1c-.5 0-.6 0-.6-.3s.5-.4 1.2-.5c.8-.2 1.2-.3 1.3-1.1.2-1.2.2-3.4.2-6.6 0-2.2 0-3.7-.3-4.1-.2-.2-.5-.4-1-.4l-.6-.6s.1-.3.3-.3c1.6-.5 3.1-1.5 4.5-2.8.1-.1.4-.3.5-.3.3 0 .4.4.4.8v1.7c0 .2.1.5.3.5.6 0 2.1-2.9 5.6-2.9 2.1.1 3.3 1 4.2 2.2M27.7 11.4c-.5 0-4.5 1.9-4.5 4.6 0 1.5 1.1 2.1 2 2.1s1.6-.5 2.2-1.4c.7-1 .8-2.8.8-4.6.1-.5-.1-.7-.5-.7m.3 5.9c-.8 1.2-2.5 2.7-4.7 2.7s-3.2-1.7-3.2-3.1c0-2.8 2.8-4.1 4.9-5.1 3.4-1.7 3.5-1.2 3.5-4.9 0-1 .1-1.8-.2-2.3-.5-.9-1.1-1.1-2-1.1-2.5 0-3.2 2.2-3.8 4-.2.7-1.2 1.1-1.8 1.1-.4 0-.9-.3-.9-.8 0-1.6 2.7-5.1 7.3-5.1 2.1 0 4.7.4 4.7 3.3 0 2.2-.3 8.4-.3 9.6 0 1.1.2 2.2 1.3 2.2s1.7-1 2-1c.2 0 .2.2.2.3 0 .6-1.4 2.7-3.8 2.7-1.5 0-2.6-1-3-2.2 0-.3-.1-.4-.2-.3M40.2.5c0 .7-.1 1.8-.1 2.6 0 .4.2.5.4.5l8.1-.3c.7 0 .8.2.8.9 0 1.5-.1 3.1-.1 10.3 0 1.8.8 3.1 3.4 3.1 1.4 0 2.9-.6 3.4-1.7.4-.7.4-3.1.4-4.9 0-4 0-5.8-.4-6.2-.4-.3-.9-.4-1.6-.5-.7-.1-1-.1-1-.4 0-.2.1-.3.6-.4l5.3-.1c.5-.1.6.1.6.6 0 1.3-.3 5.8-.3 9.3 0 2.1 0 3.7.3 4.1.2.3.5.4 1.3.4.3 0 .8-.1 1-.1.2 0 .3.1.3.3 0 .2-.2.3-.6.4-.7.1-3.6.8-4.8 1.3-.2.1-.5.2-.6.2-.3 0-.3-.2-.3-.6 0-.5.1-1 .1-1.7 0-.3-.1-.6-.3-.6-.4 0-2.5 2.8-5.6 2.8-1.9 0-4.6-1.1-4.6-4.8 0-2 .1-8.2.1-8.9 0-1.5-.1-1.5-3.1-1.5-1 0-1.7 0-2.4.1-.5 0-.6.1-.6.9-.1 1.4-.1 3.5-.1 7.8 0 1.8 0 3 .4 3.7.4.6.9.9 1.8.9 1.2 0 2.6-.6 2.7-.6.1 0 .2.1.2.2 0 .3-2.5 2.6-5.1 2.6-2.9 0-3.5-2.1-3.5-5 0-1.4.2-8.2.2-8.7s0-1-.8-1h-1.1c-.2 0-.3-.1-.3-.2 0-.3.3-.4.8-.7 1.2-.9 3.2-2.3 4-3.7.3-.6.4-.9.7-.9.3 0 .4.2.4.5M63.5 6.4c-.2 0-.4-.1-.4-.2 0-.2.2-.3.7-.5s2.8-1.4 3.8-2.4c.5-.5.7-.5.8-.5.2 0 .4.1.4.6v1.9c0 .3.1.4.2.4.5 0 1.8-2.9 4.3-2.9 1.4 0 2.4 1 2.4 2.2s-.9 2-2 2c-1.4 0-1.7-1.4-3-1.4-.6 0-.9.5-1.1.7-.7.7-.7 2.8-.7 5.8 0 2.9-.1 5.1.3 5.6.4.6 2 .9 2.6 1 .4.1.7.1.7.4s-.5.3-.8.3-3.1-.1-4.3-.1c-1.2 0-3.8.1-4.1.1s-.7 0-.7-.3.4-.3.8-.4c.3-.1 1.5-.3 1.7-1 .2-.6.3-2 .3-6.5 0-4.3-.1-4.7-1.9-4.8M83.1 3.5c-3 0-4.4 2.6-4.4 3.8 0 .5.5.6 2.4.6 2.1 0 5-.2 5-2-.1-.8-.9-2.4-3-2.4m4.8 5.5c-2.2 0-5.1-.2-8.4-.2-.8 0-1.2 0-1.2 1.6 0 3.9 1.6 7.1 6 7.1 3.3 0 4.7-2.2 4.9-2.2.2 0 .3.1.3.2 0 .6-3.1 4.4-7.2 4.4-4.4 0-7.8-3.2-7.8-8.3 0-5.3 4.1-9 8.8-9 3.5 0 6.2 2.7 6.2 5.3-.1 1.1-.6 1.1-1.6 1.1" />
							<path fill="#fff" d="M93.6 17.6c0-1.4 1-2.4 2.4-2.4s2.4 1.1 2.4 2.4-.9 2.2-2.4 2.2c-1.3 0-2.4-.9-2.4-2.2zM116.2 3.2c.3.3.6.9.6 1.6s-.4 1.5-.9 1.5c-.2 0-.4-.1-.6-.3-.9-1.1-2.5-2.1-4.1-2.1-2.9 0-5.7 2.2-5.7 6.6 0 3.2 2.2 7 6.6 7 2.4 0 3.6-1 4.6-2.4.3-.1.7.2.7.6-1.4 3.1-4.5 4.2-6.8 4.2-2.1 0-4.2-.7-5.6-2.1-1.4-1.4-2.4-3.4-2.4-6.1 0-4.5 3.2-9.2 10-9.2.9-.1 2.5.2 3.6.7zM135.3 10.9c0 5.1-3.6 8.9-8.7 8.9-4.7 0-8.5-3.4-8.5-8.5 0-5.2 3.9-8.9 8.8-8.9 4.7 0 8.4 3.5 8.4 8.5zm-8.8-7.2c-2.8 0-4.7 2.6-4.7 7.1 0 3.8 1.7 7.8 5.3 7.8 3.6 0 4.7-3.8 4.7-6.9 0-3.6-1.4-8-5.3-8zM159.1 8.7c0-2.8-.6-4.3-3.3-4.3-1.5 0-2.9.7-3.4 1.4-.5.6-.6 1-.6 2.4v6.3c0 3 .1 3.4 1.5 3.6l.8.1c.3.2.2.9-.1 1-1.2-.1-2.5-.1-3.9-.1-1.5 0-2.6 0-3.8.1-.3-.1-.4-.8-.1-1l.7-.1c1.5-.2 1.5-.6 1.5-3.6v-5.8c0-2.8-1.2-4.3-3.8-4.3-1.7 0-2.9.7-3.5 1.5-.4.5-.6 1-.6 2.3v6.3c0 3 .1 3.4 1.5 3.6l.7.1c.3.2.2.9-.1 1-1.1-.1-2.4-.1-3.8-.1-1.5 0-2.8 0-4 .1-.3-.1-.4-.8-.1-1l1-.1c1.5-.2 1.5-.6 1.5-3.6v-7.1c0-1.6 0-1.8-1.1-2.6l-.1-.1c-.2-.2-.2-.6 0-.7.9-.3 3.3-1.4 4.1-2 .2 0 .4.1.4.3-.1.9-.1 1.5-.1 1.9 0 .2.2.4.4.4 1.5-1.1 3.5-2.1 5.5-2.1s3.2.7 4.4 2.4c.4.1.6-.1 1-.3 1.6-1.1 3.7-2.1 5.6-2.1 3.3 0 4.9 2.2 4.9 5.1v7c0 3 .1 3.4 1.5 3.6l1 .1c.3.2.2.9-.1 1-1.3-.1-2.6-.1-4-.1-1.5 0-2.6 0-3.8.1-.3-.1-.4-.8-.1-1l.7-.1c1.5-.2 1.5-.6 1.5-3.6l.2-5.9z" />
						</g>
					</svg>
				</a>
			</div>
			

			<div className='header__title'>
				<div className='header__title__inner'>
					<p>Milestone | <time dateTime='2018-12-1'>1 December 2018</time></p>
					<h1>HIV</h1>
				</div>
			</div>

			<nav className='header__nav' aria-label='Main'>
				<ul className='header__nav__list'>
					{links}
				</ul>
			</nav>
		</header>
		)
}

module.exports = Header

