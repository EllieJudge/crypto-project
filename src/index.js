import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import axios from 'axios';

class App extends Component {
	componentDidMount(){
		axios.get('https://api.coingecko.com/api/v3/coins?order=rank_desc&per_page=100')
		.then(function (response) {
			console.log('success')
			console.log(response);
		})
		.catch(function (err) {
			console.log('err')
			console.log(err)
		})
	}
	render() {
		return (
			<div>
				<h1>Hello World</h1>

				<h2>Git test hellooooo</h2>
				
				<Button variant="contained">
					Default
				</Button>
				<SvgIcon>
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
			</SvgIcon>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
