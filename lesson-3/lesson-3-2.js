  "use strict";
 let basket = [
     ['t-shirt','black',1500,'black t-shirt for a girl'],
     ['dress','white',2700,'white dress for a girl'],
     ['pants','gray',1000,'gray pants for men'],
 ];



 function countBasketPrice(basket) {
    let BasketPrice = 0;
    for (let i=0;i<basket.length;i++){
        BasketPrice += basket[i][2]
    }
    return BasketPrice;
};

