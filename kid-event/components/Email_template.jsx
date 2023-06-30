import React from 'react';

const Email_template = ({ name, email }) => {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>Your Email Heading</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>Hello {name},</p>
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>Your {email} content goes here.</p>
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>Thank you for your time.</p>
      </div>
    );
  };
  
  export default Email_template;