import React from 'react';
import Product from './Product';

function Category({ products, onAddToCart }) {
    return (
        <div>
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    onAction={() => onAddToCart(product)}
                    actionLabel='Dodaj do koszyka'
                    disabled={product.inCart}
                />
            ))}
        </div>
    )
}

export default Category;