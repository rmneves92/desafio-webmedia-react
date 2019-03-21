import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSearchField: false
		};

		this.searchIcon = React.createRef();

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		const currentState = this.state.showSearchField;

		this.searchIcon.current.style.display = 'none';

		this.props.hideLogo();

		this.setState({ ...this.props, showSearchField: !currentState });
	}

	closeSearchField() {
		const currentState = this.state.showSearchField;

		this.searchIcon.current.style.display = 'none';

		this.setState({ ...this.props, showSearchField: !currentState });
	}

	renderSearch() {
		if (!this.props.mobile) {
			return (
				<div className="search-field">
					<input
						type="text"
						id="search-input"
						className="input-search"
						onKeyPress={this.props.handleKeyPress}
						autoFocus
					/>

					<i className="button-search fas fa-search" onClick={this.props.handleSearch} />
				</div>
			);
		} else {
			return (
				<div>
					<i className="open-input-search fas fa-search" ref={this.searchIcon} onClick={this.onClick} />

					{this.state.showSearchField ? (
						<Bounce right>
							<div className="search-field-mobile">
								<input
									type="text"
									id="search-input"
									className="input-search-mobile"
									onKeyPress={this.props.handleKeyPress}
									autoFocus
								/>
								<i className="button-search fas fa-search" onClick={this.props.handleSearch} />
							</div>
						</Bounce>
					) : null}
				</div>
			);
		}
	}

	render() {
		return this.renderSearch();
	}
}
