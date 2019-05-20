import React, { Component } from 'react';
import './coins.css';

class Coins extends Component {

  currencyFormat = (num) => {
    return "$" + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  };

  supplyFormat = (num) => {
      return this.props.coin.symbol + " " + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  };
  render() {
    let title = this.props.coin.name;
    let price = this.props.coin.quote.USD.price;
    let symbol = this.props.coin.symbol;
    let percent = this.props.coin.quote.USD.percent_change_24h;
    let marketcap = this.props.coin.quote.USD.market_cap;
    let volume = this.props.coin.quote.USD.volume_24h;
    let supply = this.props.coin.total_supply;
    let rank = this.props.coin.cmc_rank;

    let classPercent = "coin-percent";

    if(percent < 0){
      classPercent = "coin-percent-negative";
    }

    return (
      <div className="coinContainer">
      <div className="coinWrap1">
        <div className="coin-main">
          <h1 className="coin-title">
            {title}
          </h1>
          <p className="coin-symbol">
            {symbol}
          </p>
        </div>
        <p className="coin-rank">
          RANK {rank}
        </p>
      </div>
        <hr/>
      <div className="coinWrap2">
          <p className="coin-price">
            {this.currencyFormat(Number(price).toFixed(2))}
          </p>
          <p className={classPercent}>
            {percent}%
          </p>
        </div>

        <div className="coinWrap3">
          <p className="coin-marketcap">
            {this.currencyFormat(marketcap)}
          </p>
          <h6>MARKET CAP</h6>
        </div>

        <div className="coinWrap3">
          <p className="coin-volume">
            {this.currencyFormat(volume)}
          </p>
          <h6>VOLUME</h6>
        </div>

        <div className="coinWrap3">
          <p className="coin-circusupply">
            {this.supplyFormat(supply)}
          </p>
          <h6>CIRCULATING SUPPLY</h6>
        </div>
      </div>
    );
  }
}

export default Coins;
