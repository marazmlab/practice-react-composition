import React from 'react';
import Product from './Product';

function Cart({ cart, onRemoveFromCart }) {
    return (
        <div>
            {cart.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    onAction={() => onRemoveFromCart(product.id)}
                    actionLabel='Usuń z koszyka'
                />
            ))}
        </div>
    )
}

export default Cart;