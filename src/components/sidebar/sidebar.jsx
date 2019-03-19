import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default (props) => {
	return (
		<div>
			<Menu {...props}>
				<ul className="bm-list-menu">
					<li>
						<Link to="/">
							<p className="nav-menu-item">Notícias em destaque</p>
						</Link>
					</li>

					<li>
						<Link to="/br">
							<p className="nav-menu-item">Notícias do Brasil</p>
						</Link>
					</li>

					<li>
						<Link to="/us">
							<p className="nav-menu-item">Notícias do EUA</p>
						</Link>
					</li>

					<li>
						<Link to="/ag">
							<p className="nav-menu-item">Notícias da Argentina</p>
						</Link>
					</li>

					<li>
						<Link to="/fr">
							<p className="nav-menu-item">Notícias da França</p>
						</Link>
					</li>
				</ul>
			</Menu>
		</div>
	);
};
