import React from 'react';
import PropTypes from 'prop-types';

const Box = ({
  fromCurrency,
  toCurrency,
  onFromCurrencyChange,
  onToCurrencyChange,
  getCountryCode,
  exchangeRate,
  loading,
  fetchExchangeRate,
  amount,
  setAmount,
  onSwapCurrencies
}) => {

  const handleFromChange = (e) => {
    onFromCurrencyChange(e.target.value);
  };

  const handleToChange = (e) => {
    onToCurrencyChange(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const fromCountryCode = getCountryCode(fromCurrency);
  const toCountryCode = getCountryCode(toCurrency);

  const convertedAmount = exchangeRate ? (amount * exchangeRate).toFixed(2) : '0.00';
  return (
    <div className='container'>
      <div className='box1'>
        <div className='text' id='text2'><h1>Currency</h1>
          <h1><b>Exchanger</b></h1></div>
        <div className='text'><p>It is a user-friendly app that instantly converts values between different currencies with real-time exchange rates. It supports multiple currencies, ensuring accurate conversions for travelers, shoppers, and business professionals. The intuitive design makes it easy to use, offering a seamless and efficient experience.</p></div>
        <div><button id='btn' type="button" class="btn btn-primary">Let's Check It<i class="fa-solid fa-arrow-right" style={{ marginTop: '5px' }}></i></button></div>
      </div>
      <div className="wrapper">
        <header id='title'>Currency Converter<i class="fas fa-shekel-sign" style={{ marginTop: '6px' }}></i></header>
        <form action="#">
          <div className="amount">
            <p>Enter Amount</p>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              step="any"
            />
          </div>
          <div className="drop-list">
            <div className="from">
              <p>From</p>
              <div className="select-box">
                <img src={`https://flagsapi.com/${fromCountryCode}/flat/64.png`} alt="flag" />
                <select onChange={handleFromChange} value={fromCurrency}>
                  <option value="USD">USD</option>
                  <option value="NPR">NPR</option>
                  <option value="INR">INR</option>
                  <option value="PKR">PKR</option>
                  <option value="BDT">BDT</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  <option value="AED">AED</option>

                </select>
              </div>
            </div>
            <div className="icon" onClick={onSwapCurrencies}>
              <i className="fas fa-exchange"></i>
            </div>
            <div className="to">
              <p>To</p>
              <div className="select-box">
                <img src={`https://flagsapi.com/${toCountryCode}/flat/64.png`} alt="flag" />
                <select onChange={handleToChange} value={toCurrency}>
                  <option value="USD">USD</option>
                  <option value="NPR">NPR</option>
                  <option value="INR">INR</option>
                  <option value="PKR">PKR</option>
                  <option value="BDT">BDT</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  <option value="AED"></option>

                </select>
              </div>
            </div>
          </div>
          <div className="exchange-rate">
            {loading ? 'Loading exchange rate...' : `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}
          </div>
          <button type="button" onClick={fetchExchangeRate}>Get Exchange Rate</button>
        </form>
      </div>
    </div>
  );
};

Box.propTypes = {
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  onFromCurrencyChange: PropTypes.func.isRequired,
  onToCurrencyChange: PropTypes.func.isRequired,
  getCountryCode: PropTypes.func.isRequired,
  exchangeRate: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  fetchExchangeRate: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  onSwapCurrencies: PropTypes.func.isRequired
};

export default Box;
