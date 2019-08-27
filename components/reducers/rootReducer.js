//redux store

const state = {
    cryptos: []
}

const rootReducer = (state, action => {
   return {
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
        	}}
})



export default rootReducer;