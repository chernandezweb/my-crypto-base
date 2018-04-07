import React, { Component } from 'react';
import './coins.css';

class Coins extends Component {
  render() {
    let title = this.props.coin.name;
    let price = this.props.coin.price_usd;
    let symbol = this.props.coin.symbol;
    let percent = this.props.coin.percent_change_24h;
    let marketcap = this.props.coin.market_cap_usd;
    let volume = this.props.coin['24h_volume_usd'];
    let supply = this.props.coin.available_supply;
    let rank = this.props.coin.rank;

    let classPercent = "coin-percent"

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
            ${price}
          </p>
          <p className={classPercent}>
            {percent}%
          </p>
        </div>

        <div className="coinWrap3">
          <p className="coin-marketcap">
            ${marketcap}
          </p>
          <h6>MARKET CAP</h6>
        </div>

        <div className="coinWrap3">
          <p className="coin-volume">
            ${volume}
          </p>
          <h6>VOLUME</h6>
        </div>

        <div className="coinWrap3">
          <p className="coin-circusupply">
            ${supply}
          </p>
          <h6>CIRCULATING SUPPLY</h6>
        </div>
      </div>
    );
  }
}

export default Coins;