//was getting error when trying to create a redux store from index.js, saying it couldnt
//reach the rootReducer. So tried copying code into Home.js (so closer)
//Didnt throw error but also wouldn't show anything... need to go home now will try 
//again tomorrow - grr!


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// //import Button from '@material-ui/core/Button';
// //import SvgIcon from '@material-ui/core/SvgIcon';
// //import axios from 'axios';
// import { createStore} from 'redux';
// import { Provider } from 'react-redux';//glue
// import rootReducer from '../components/reducers/rootReducer';

// const store = createStore(rootReducer);

// class App extends Component {
// render() {
// 		const { cryptos } = this.store;
// 		const cryptosList = cryptos.length ? ( //if something in my array do this then store in cryptosList
// 			cryptos.map(cryptos => {
// 				return (
// 					<div key={cryptos.id}>
// 					<div><p>
// 					<img src={cryptos.image.small} alt={cryptos.image.small}></img>
// 						Name: {cryptos.name}, Symbol: {cryptos.symbol},

// 						Current Price (eur): {cryptos.market_data.current_price.eur}
// 					 </p></div>
// 					</div>
// 				)})
// 	)   : (
// 			<div>No cryptos yet</div>//else, render this if no bitcoins in state
// 		)
// 		 return (
// 			<div>
// 				{cryptosList}
// 			</div>
// 		)
// 		}
// }


// // class App extends Component {
// // 	state = {
// // 		cryptos: [ ]
// // 	}
// // 	componentDidMount(){
// // 		axios.get('https://api.coingecko.com/api/v3/coins?order=rank_desc&per_page=100')
// // 		.then(response => {
// // 			console.log('success!', response)
// // 			this.setState({
// // 				cryptos: response.data
// // 			})
// // 		})
// // 		.catch(function (err) {
// // 			console.log('err')
// // 			console.log(err)
// // 		})
// // 	}
// // 	render() {
// // 		const { cryptos } = this.state;
// // 		const cryptosList = cryptos.length ? ( //if something in my array do this then store in cryptosList
// // 			cryptos.map(cryptos => {
// // 				return (
// // 					<div key={cryptos.id}>
// // 					<div><p>
// // 					<img src={cryptos.image.small} alt={cryptos.image.small}></img>
// // 						Name: {cryptos.name}, Symbol: {cryptos.symbol},

// // 						Current Price (eur): {cryptos.market_data.current_price.eur}
// // 					 </p></div>
// // 					</div>
// // 				)})
// // 	)   : (
// // 			<div>No cryptos yet</div>//else, render this if no bitcoins in state
// // 		)
// // 		 return (
// // 			<div>
// // 				{cryptosList}
// // 			</div>
// // 		)
// // 		}
// // }

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
