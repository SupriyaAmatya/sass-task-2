import React from 'react'
import {IoMdHeart} from 'react-icons/io';
import {MdCopyright} from 'react-icons/md';

const Footer = () => {
	return (
		<footer className="footer-wrapper">
			<div className="container container--footer">
				<ul className="nav nav--footer">
					<li className="nav__item small text-medium">
						<a href="!#">creative</a>
					</li>
					<li className="nav__item small text-medium">
						<a href="!#">about us</a>
					</li>
					<li className="nav__item small text-medium">
						<a href="!#">blog</a>
					</li>
					<li className="nav__item small text-medium">
						<a href="!#">licenses</a>
					</li>
				</ul>
				<p className="text-center small">
					<MdCopyright size={'10px'} style={{position: 'relative', top:'2px'}} /> 2016, made with 
					<IoMdHeart size={'10px'} style={{position: 'relative', top:'2px'}}/>
					 by Creative Tim</p>
			</div>
		</footer>
	)
}

export default Footer
