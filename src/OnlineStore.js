import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './CheckOut';
import PaymentProvider from './PaymentProvider';

const products = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZSUyMGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 59.99,
    category: "videogames"
  },
  {
    id: 2,
    name: "Super Mario Odyssey",
    image: 'https://images.unsplash.com/photo-1558742569-fe6d39d05837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    price: 49.99,
    category: "videogames"
  },
  {
    id: 3,
    name: "Death Stranding",
    image: 'https://images.unsplash.com/photo-1651864757108-761b6af2a469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGUlMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    price: 39.99,
    category: "videogames"
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    image: "https://images.unsplash.com/photo-1616565441366-34a5fe33fe42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHViZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    price: 59.99,
    category: "videogames"
  },
  {
    id: 5,
    name: "The Last of Us Part II",
    image: "https://images.unsplash.com/photo-1549056630-ee2626bb5ad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    price: 49.99,
    category: "videogames"
  },
  {
    id: 6,
    name: "Halo Infinite",
    image: "https://images.unsplash.com/photo-1613536491198-a0afa1916b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGUlMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    price: 59.99,
    category: "videogames"
  }
  ,{
    id: 7,
    name: 'Call of Duty: Modern Warfare',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 59.99,
    category: 'Video Games',
  },
  {
    id: 8,
    name: 'Overwatch Hoodie',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    price: 39.99,
    category: 'Fan Gear',
  },
  // add more products here...
];

function OnlineStore() {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(1);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((p) => p.id !== product.id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setStep(2);
  };

  const handlePayment = () => {
    setStep(3);
    // make API call to payment provider
  };

  return (
    <div>
      {step === 1 && (
        <>
          <ProductList products={products} addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} handleCheckout={handleCheckout} />
        </>
      )}
      {step === 2 && (
        <>
          <Checkout cart={cart} handlePayment={handlePayment} />
        </>
      )}
      {step === 3 && (
        <>
          <PaymentProvider />
        </>
      )}
    </div>
  );
}

export default OnlineStore;
