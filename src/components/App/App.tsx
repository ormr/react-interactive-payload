import React from 'react';
import './App.scss';

const App: React.FC = (): JSX.Element => {
return (
  <div className="app">
    <div className="cart-input cart-input-label">
      <label htmlFor="cartNumber">Card Number</label>
      <input id="cartNumber" type="text" />
    </div>
    <div className="cart-input cart-input-label">
      <label htmlFor="cartHolder">Card Holders</label>
      <input id="cartHolder" type="text" />
    </div>
    <div className="cart-input-row">
      <div className="cart-input__group">
        <label htmlFor="cartHolder" className="cart-input-label">Expiration Date</label>
        <div className="cart-input-col">
          <select className="cart-input-row">
          <option selected disabled>
            Month
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>

        <select className="cart-input-row">
          <option selected disabled>
            Year
          </option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
        </select>
        </div>
      </div>

      <div className="cart-input">
        <label htmlFor="cartHolder" className="cart-input-label">
          CVV
        </label>
        <input id="cartHolder" type="text" />
      </div>
    </div>
  </div>
);
}

export {
  App
};
