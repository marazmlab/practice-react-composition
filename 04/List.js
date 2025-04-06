import React from 'react';

function List({ files }) {
    if (files.length === 0) {
        return <p>Brak wgranych plików.</p>;
    }
    
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {files.map((file) => (
                <li 
                    key={file.id} 
                    style={{ 
                        marginBottom: '10px', 
                        padding: '10px', 
                        border: '1px solid #343', 
                        borderRadius: '5px' 
                    }}
                >
                <strong>Nazwa: </strong> {file.name} <br />
                <strong>Rozmiar: </strong> {file.size} B <br />
                <strong>Zawartość: </strong> 
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {file.content}
                </pre>
            </li>
            ))}
        </ul>
    );
}

export default List;