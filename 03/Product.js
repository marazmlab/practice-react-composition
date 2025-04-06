import React from 'react';
function Product( {name, price, onAction, actionLabel, disabled }) {
    const styles = {
        container: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            margin: '10px 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        name: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        price: {
            color: '#555',
            marginBottom: '10px',
        },
        button: {
            padding: '5px 10px',
            marginBottom: '10px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: disabled ? '#ccc' : '#007bff',
            color: '#fff',
            cursor: disabled ? 'not-allowed' : 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.price}>Cena: {price} zł</p>
            <button
                style={styles.button}
                onClick={onAction}
                disabled={disabled}
            >
                {actionLabel}
            </button>
        </div>
    );
}

export default Product;