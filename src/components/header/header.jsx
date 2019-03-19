import React from 'react';

import Bounce from 'react-reveal/Bounce';
import Logo from '../logo/logo';

export default (props) => (
	<div className="header flex-container flex-row  ">
		<Bounce top>{!props.hideLogo && <Logo link="/" id="header-logo" />}</Bounce>
		<Bounce right>{props.children}</Bounce>
	</div>
);
