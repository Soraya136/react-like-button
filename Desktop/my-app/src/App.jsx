import React, { useState } from 'react';

function App() {

  const [likes, setLikes] = useState(0);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      
      <div style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'left',
        minWidth: '250px'
      }}>
     
        <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px', color: '#333' }}>
          ❤️ Likes: <span style={{ color: '#e0245e' }}>{likes}</span>
        </div>
      
        
        <button 
          onClick={() => setLikes(likes + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #e1e8ed',
            backgroundColor: '#fff',
            transition: 'background-color 0.2s',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f7f9fa'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
        >
          [ Like ❤️ ]
        </button>
      </div>
    </div>
  );
}

export default App;