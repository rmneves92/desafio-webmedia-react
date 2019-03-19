import 'normalize.css';
import '../main/app.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import React, { Component } from 'react';

import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import NewsList from '../components/news/list';
import Footer from '../components/footer/footer';
import Navigation from '../components/navigation/navigation';
import Search from '../components/search/search';
import Sidebar from '../components/sidebar/sidebar';

import MediaQuery from 'react-responsive';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			country: '',
			query: '',
			hideLogo: false,
			hideSearchButton: false
		};

		this.searchField = React.createRef();

		this.hideLogo = this.hideLogo.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	hideLogo() {
		const currentState = this.state.hideLogo;

		this.setState({ ...this.state, hideLogo: !currentState });
	}

	handleSearch() {
		const searchInput = document.querySelector('#search-input');

		searchInput
			? this.setState({
					...this.state,
					query: searchInput.value // trocar para ref
				})
			: '';
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.handleSearch();
		}
	}

	render() {
		return (
			<Router>
				<div className="app">
					<MediaQuery query="(max-width: 700px)">
						<Sidebar />
					</MediaQuery>

					<Header hideLogo={this.state.hideLogo}>
						<MediaQuery query="(min-width: 700px)">
							<Search
								handleSearch={this.handleSearch}
								handleKeyPress={this.handleKeyPress}
								mobile={false}
							/>
						</MediaQuery>

						<MediaQuery query="(max-width: 700px)">
							<Search handleSearch={this.handleSearch} mobile={true} hideLogo={this.hideLogo} />
						</MediaQuery>
					</Header>

					<MediaQuery query="(min-width: 700px)">
						<Navbar />
					</MediaQuery>

					<Route
						exact
						path="/"
						render={(props) => <NewsList {...props} country="/" query={this.state.query} />}
					/>
					<Route
						exact
						path="/br"
						render={(props) => <NewsList {...props} country="br" query={this.state.query} />}
					/>
					<Route
						exact
						path="/us"
						render={(props) => <NewsList {...props} country="us" query={this.state.query} />}
					/>
					<Route
						exact
						path="/ar"
						render={(props) => <NewsList {...props} country="ar" query={this.state.query} />}
					/>
					<Route
						exact
						path="/fr"
						render={(props) => <NewsList {...props} country="fr" query={this.state.query} />}
					/>

					<Navigation />

					<Footer />
				</div>
			</Router>
		);
	}
}
