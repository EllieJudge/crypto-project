import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Favourites from './components/Favourites';
import Navbar from './components/Navbar';
import StarRating from './components/StarRating'

class App extends Component {
	state = {
		cryptos: [],
		search: ''
	}
	
	componentDidMount(){
		axios.get('https://api.coingecko.com/api/v3/coins?order=rank_desc&per_page=100')
		.then(response => {
			console.log('success!', response)
			this.setState({
				cryptos: response.data
			})
		})
		.catch(function (err) {
			console.log('err')
			console.log(err)
		})
	}
	
	handleOnChange = evt =>{
		this.setState({
			search: evt.target.value
		})
	}

	handleSearch = () =>{
		let results = [];
		this.state.cryptos.forEach(crypto => {
			if(crypto.name.includes(this.state.search)){
				results.push(crypto)
			}
		});
		this.setState({
			cryptos: results
		})
	}
	
	moreInfo = (e) => {
		console.log(e.target.name)
	}

	render() {
		const { cryptos } = this.state
		const cryptosList = cryptos.length ? ( //if something in my array do this then store in cryptosList
			cryptos.map(cryptos => {
				return (
					<div key={cryptos.id} onClick={this.moreInfo}><div>
					<img src={cryptos.image.small} alt={cryptos.image.small}></img>						
						Name: {cryptos.name}, 
						Symbol: {cryptos.symbol},
						Current Price (eur): {cryptos.market_data.current_price.eur}, 						
						Favourite: <StarRating />					
					 </div>
					</div>
				)})
			) : (
				<div>No cryptos yet...</div>//else, render this if no bitcoins in state
			)

		 return (

			<div className="app">
			 <BrowserRouter>
				<div>
					<Navbar />
					<input onChange={this.handleOnChange} placeholder="Search"></input>
					<button onClick={this.handleSearch}>Submit</button>
					<div className="center">
					{/* <Route exact path='/' render={() => <Home cryptoList={cryptosList} />} /> */}
					<Route path='/Home' render={() => <Home cryptoList={cryptosList} />} />
					<Route path='/About' component={About} />
					<Route path='/Favourites' component={Favourites} />
					</div>
				</div>
			</BrowserRouter>
			</div>
		)
	}
}

export default App
