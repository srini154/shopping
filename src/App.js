// src/App.js
import React from "react";
import "./App.css";

const products = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 25 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Website</h1>
      </header>
      <main>
        <section className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
