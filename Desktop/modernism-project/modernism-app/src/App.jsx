import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFDF9',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box'
    }}>
      

      <div style={{
        width: '100%',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
   

        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#8C5A3C'
        }}>
          Modernism
        </div>
        

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '25px',
          fontSize: '15px',
          fontWeight: '500',
          color: '#4B5563'
        }}>
          <div style={{ color: '#8C5A3C', borderBottom: '2px solid #8C5A3C', paddingBottom: '4px', cursor: 'pointer' }}>Home</div>
          <div style={{ cursor: 'pointer' }}>About</div>
          <div style={{ cursor: 'pointer' }}>Services</div>
          <div style={{ cursor: 'pointer' }}>Projects</div>
          <div style={{ cursor: 'pointer' }}>Portfolio</div>
        </div>
        
        
        <button style={{
          backgroundColor: '#8C5A3C',
          color: '#ffffff',
          padding: '10px 24px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>

      
      <div style={{
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1F2937', marginBottom: '10px' }}>
          Modern Interior Design Service
        </div>
        <div style={{ fontSize: '16px', color: '#6B7280', maxWidth: '500px' }}>
       
        </div>
      </div>

      
      <div style={{
        backgroundColor: '#1C1C1C',
        color: '#9CA3AF',
        fontSize: '14px',
        padding: '50px 40px 20px 40px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
       
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          
         
          <div style={{ flex: '1', minWidth: '200px' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#E5A93C', marginBottom: '16px' }}>
              Modernism
            </div>
            <div style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
              Creating beautiful, functional spaces that reflect your unique style and needs.
            </div>
          </div>

       
          <div style={{ flex: '1', minWidth: '150px' }}>
            <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '16px' }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ cursor: 'pointer' }}>Interior Design</div>
              <div style={{ cursor: 'pointer' }}>Space Planning</div>
              <div style={{ cursor: 'pointer' }}>Consultation</div>
              <div style={{ cursor: 'pointer' }}>Project Management</div>
            </div>
          </div>

   
          <div style={{ flex: '1', minWidth: '150px' }}>
            <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '16px' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ cursor: 'pointer' }}>About Us</div>
              <div style={{ cursor: 'pointer' }}>Our Team</div>
              <div style={{ cursor: 'pointer' }}>Portfolio</div>
              <div style={{ cursor: 'pointer' }}>Careers</div>
            </div>
          </div>

         
          <div style={{ flex: '1', minWidth: '200px' }}>
            <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '16px' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>123 Design Street, New York, NY 10001</div>
              <div>info@modernism.com</div>
              <div>(555) 123-4567</div>
            </div>
          </div>

        </div>

        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid #374151',
          textAlign: 'center',
          fontSize: '12px',
          color: '#6B7280'
        }}>
          &copy; {new Date().getFullYear()} Modernism Interior Design. All rights reserved.
        </div>
      </div>

    </div>
  );
}

export default App;
