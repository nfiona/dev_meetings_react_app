import React, { Component } from 'react';
import ProductTile from  './components/Product.js'

import './App.css';


function App() {
  // array of products
  const products = [
        { id: 0,
          name: "JavaScript: The Definitive Guide",
          description: `Since 1996, JavaScript: The Definitive Guide...`,
          price: 28.89
        },
        { id: 1,
          name: "Eloquent JavaScript",
          description: `JavaScript lies at the heart...`,
          price: 21.22
        },
        { id: 2,
          name: "JavaScript: The Good Parts",
          description: `Most programming languages...`,
          price: 16.59
        }
    ]

    // render each item in products array using .map() ES6
  return (

    <section>
      <h1>Products</h1>

      { products.map( product =>
        <ProductTile key={ product.id} item={ product} />
      )}


    </section>
  )
}




export default App;
