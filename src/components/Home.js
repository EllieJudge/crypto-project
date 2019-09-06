import React from 'react';

const Home = ({ cryptoList }) => {
//    pass state instead of cryptolist as props and add all logic here???
    return (
        <div>
           <h1>Home</h1> 
           {/* <img className="coinImage" src="http://www.pngplay.com/wp-content/uploads/2/Bitcoin-Crypto-Transparent-PNG.png" /> */}
           <h3>Top 100 Cryptocurrency Exchanges by Trade Volume </h3>
           {cryptoList}
        </div>
    )
}

export default Home

