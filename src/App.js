import React, { Component } from 'react';
import logo from './images/header-coin.png';
import './App.css';

import Coins from './components/coins/coins';
import ScrollToTop from 'react-scroll-up';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        coins: [],
        allCoins:[],
        search:''
    };
  }
  handleSearch = (event) =>{
    console.log(event);
    this.setState({
      search: event.value,
      coins: this.state.allCoins.filter((coin) => new RegExp(event.target.value, "i").exec(coin.name))
    });
  };

  componentDidMount(){
    // const url = "https://api.coinmarketcap.com/v1/ticker/?limit=102";
    const url = "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

    const obj = {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            'X-CMC_PRO_API_KEY': '974c8426-c524-42f0-b01c-56d44111c967'
        },
        json: true,
        gzip: true

    };
    fetch(url, obj)
    .then(response => response.json())
    .then((data) =>{
        console.log(data);
      this.setState({
        coins: data.data,
        allCoins: data.data
      });
    });
  }

  render() {
    const styleLogo = {
      backgroundImage: `url('${logo}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "80px",
      height: "80px"
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo" alt="logo" style={styleLogo}></div>
          <h1 className="App-title">My Crypto Base</h1>
          <p>By Carlos Hernandez</p>
        </header>

        <div className='search'>
            <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}/>
          </div>
        <div className="coins">
        {this.state.coins.map((coin) => {
              return <Coins
              key={coin.id}
              coin={coin}/>
        })} </div>
        <ScrollToTop showUnder={160}>
        <i className="fas fa-arrow-circle-up"></i>
        </ScrollToTop>
        </div>
    );
  }
}

export default App;
