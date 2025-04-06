import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        products: data.map((product) => ({ ...product, inCart: false })),
        cart: [],
    };

    handleAddToCart = (product) => {
        this.setState((prevState) => ({
            products: prevState.products.map((p) => 
                p.id === product.id ? { ...p, inCart: true } : p),
            cart: [...prevState.cart, product],
        }));
    };

    handleRemoveFromCart = (productId) => {
        this.setState((prevState) => ({
            products: prevState.products.map((p) => 
                p.id === productId ? { ...p, inCart: false } : p),
            cart: prevState.cart.filter((p) => p.id !== productId),
        }));
    };
    
    render() {
        const { products, cart } = this.state;

        const styles = {
            container: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
            },
            section: {
                width: '45%',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
            },
            header: {
                textAlign: 'center',
                fontSize: '1.5rem',
                marginBottom: '10px',
                color: '#333',
            },
        };

        return (
            <div style={styles.container}>
                <div style={styles.section}>
                    <h2 style={styles.header}>Kategoria</h2>
                    <Category products={products} onAddToCart={this.handleAddToCart} />
                </div>
                <div style={styles.section}>
                    <h2 style={styles.header}>Koszyk</h2>
                    <Cart cart={cart} onRemoveFromCart={this.handleRemoveFromCart} />
                </div>
            </div>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
