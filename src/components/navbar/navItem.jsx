import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
	<Link to={props.path}>
		<div>
			<li className="nav-menu-item">{props.description}</li>
		</div>
	</Link>
);
