import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//import { useState } from "react";

var CartFunctionality = () => {
  var productNames = ["Jacuzzi", "Nike", "Adidas", "Lakme", "Bubble Wrap"];
  var productPrices = [7500,8500,6500,9500,6700];
  var productQty = [0,0,0,0,0];
  var [qty, setQty] = React.useState(productQty);
  var [totalQty, setTotalQty] = React.useState(0);  
    
 var calcluateQty = () => {
   var total = 0;
   qty.forEach((q) => {
       total += q;
    });
   
   return total;
 };
  
 var calcluateAmount = () => {
   var total = 0;
   qty.forEach((q, index) => {
       total += (q * productPrices[index]);
    });
   
   return total;
 };
   
  
  var addToCart = (index) => {    
    setQty(qty.map((q, i) => i == index ? q + 1 : q));       
   };
  
  function removeCart(index) {
      setQty(qty.map((q, i) => (i == index && q > 0) ? q - 1 : q));         
  };
  
    return (      
          <div>
            {
              productNames.map((nm, index) =>                               
                              <div key={index}>
                                <h3>{nm} : {productPrices[index]}
                                  , Qty: { qty[index] }</h3>
                                <button onClick={() => addToCart(index)}>Add</button>
                                <button onClick={() => removeCart(index)}>Remove</button>
                              </div>
              )              
            }
          <h4>Total Qty: {calcluateQty()}</h4>
          <h4>Total Amount: {calcluateAmount()}</h4>
        </div>                               
    );
};

ReactDOM.render(<CartFunctionality />, document.getElementById("root"));
reportWebVitals();
