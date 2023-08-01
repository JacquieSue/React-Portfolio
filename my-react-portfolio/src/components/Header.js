import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: '#0f1a82',
    padding: '20px',
  },
  headingStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Jacquelyn Suzette Pulliam</h1>
    </header>
  );
}

export default Header;