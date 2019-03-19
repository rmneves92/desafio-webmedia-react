import React from 'react';
import logo from '../../assets/images/logo_webedia.png';

export default (props) => (
	<div>
		<a href={props.link} id={props.id}>
			<img className="logo" src={logo} alt="Webedia" />
		</a>
	</div>
);
