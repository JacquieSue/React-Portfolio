import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <header>
      <h1 style="color:purple;">Jacquelyn Suzette Pulliam</h1>
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div style={linkStyle}>
            <a href="#">About Me</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Portfolio</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Resume</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
    </header>
  );
}