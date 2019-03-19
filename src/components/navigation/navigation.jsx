import React, { Component } from 'react';
import BtnNavigation from './buttonNavigation';

export default class Navigation extends Component {
	render() {
		return (
			<div className="area-buttons flex-container flex-row">
				<BtnNavigation index={0} />
				<BtnNavigation index={1} />
				<BtnNavigation index={2} />
				<BtnNavigation index={3} />
				<BtnNavigation index={4} />
			</div>
		);
	}
}
