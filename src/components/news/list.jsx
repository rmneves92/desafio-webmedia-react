import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import LoadingSpinner from '../spinner/spinner';
import Fade from 'react-reveal/Fade';

const key = '8be00b3699a645b59e4a61d676489a5c';

export default class NewsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			loading: false,
			query: ''
		};
	}

	componentDidMount() {
		this.getNews();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.getNews();

			this.setState(...this.state, nextProps);
		}
	}

	formatDate(date) {
		let fdate = moment(date);
		return fdate.format('DD/MM/YYYY');
	}

	getNews() {
		let url = '';

		this.setState({...this.props, loading: true }, () => {
			const searchCountry = `top-headlines?country=${this.props.country}`;
			const searchQuery = `everything?q=${this.state.query}&sortBy=publishedAt`;

			if (this.props.country === '/' && !this.state.query) {
				this.state.query;
				url = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${key}`;
			} else {
				url = `https://newsapi.org/v2/${this.state.query ? searchQuery : searchCountry}&apiKey=${key}`;
			}

			axios.get(url).then((resp) => {
				this.setState({
					...this.state,
					loading: false,
					list: resp.data.articles || '<p>Vazio</p>'
				});
			});
		});
	}

	renderNews() {
		const list = this.state.list.slice(0, 7) || [];

		if (list.length > 0) {
			return list.map((item, index) => (
				<div key={index}>
					<div className={'news-item-wrap news-index-' + index}>
						<a className="news-link" href={item.url} target="_blank" rel="noopener noreferrer">
							<div className="news-media">
								<img className="media" src={item.urlToImage} />
							</div>

							<div className="news-content flex-container flex-column">
								{item.publishedAt && (
									<p className="news-update-time">{this.formatDate(item.publishedAt)}</p>
								)}

								{item.title && (
									<p className="news-headline " title={item.title}>
										{item.title}
									</p>
								)}

								{item.description && (
									<p className="news-description truncate-text">{item.description}</p>
								)}

								{item.author && <p className="news-author truncate-text">Por: {item.author}</p>}
							</div>
						</a>
					</div>
				</div>
			));
		} else {
			return (
				<p className="empty-result">
					Sua pesquisa - <strong>{this.state.query}</strong> - não encontrou nenhuma notícia correspondente.
				</p>
			);
		}
	}

	render() {
		const { loading } = this.state;

		return (
			<section className="news-list grid">
				{loading ? <LoadingSpinner /> : <Fade bottom>{this.renderNews()}</Fade>}
			</section>
		);
	}
}
