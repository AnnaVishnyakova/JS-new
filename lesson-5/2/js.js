"use strict";

    const main = document.querySelector('#main');
    const cart ={
            render(good){
               
                return `<div class="good">
                        <div><b>Название товара</b>:${good.name}</div>
                        <div><b>Цена товара</b>:${good.price}</div>
                        <div><b>Выбранное количество</b>:${good.quantity}</div>
                        <div><b>Стоимость</b>:${good.quantity*good.price}</div>
                        <div><b>Описание товара</b>:${good.description}</div>
                        </div>

                `;
                
            }
    }
    const basket ={
            cartBlok:null,
            cartButton:null,
            cart,
            sum: 0,
            goods:
            [
                {
                    id:1,
                    name:'t-shirt',
                    color:'black', 
                    price: 1500,
                    quantity:2,
                    description:'black t-shirt for a girl'
                },
                {
                    id: 2,
                    name: 'dress',
                    color: 'white',
                    price: 2700,
                    quantity:1,
                    description: 'white dress for a girl'
                },
                {
                    id: 3,
                    name: 'pants',
                    color: 'gray',
                    price: 1000,
                    quantity:3,
                    description: 'gray pants for men'
                },
                {
                    id: 4,
                    name: 'pants',
                    color: 'gray',
                    price: 1000,
                    quantity: 3,
                    description: 'gray pants for men'
                  }

            ],

            init(){
                this.cartBlok = document.querySelector('.cart-list');
                this.cartButton = document.querySelector('.cart-btn');
                this.cartButton.addEventListener('click',this.clearCart.bind(this));  
                
                this.render();
                

            },

            render(){
               
                if (this.goods.length){
                    this.goods.forEach(good =>{
                         this.cartBlok.insertAdjacentHTML('beforeend',this.cart.render(good));
                         
                    });
                    this.cartBlok.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций стоимостью ${this.sumBasket()}`)
                   
                }
            },


            sumBasket() {
                let sum = 0;
                
                for (var key in this.goods) {
                    const elem = this.goods[key]; // получить товар по ключу
                    sum += elem.price*elem.quantity;
               
                }
                this.sum = sum; // запись свойста
                return sum;
            },

            clearCart(){
                this.goods = [ ];
                this.render();
            },
    };
        
        
basket.init();