import React from 'react';
import NavItem from './navItem';

export default (props) => (
	<div className="nav-wrap">
		<nav className="nav">
			<ul className="nav-menu">
				<NavItem path="/" description="Notícias em destaque" />
				<NavItem path="br" description="Notícias do Brasil" />
				<NavItem path="us" description="Notícias do EUA" />
				<NavItem path="ar" description="Notícias da Argentina" />
				<NavItem path="fr" description="Notícias da França" />
			</ul>
		</nav>
	</div>
);
