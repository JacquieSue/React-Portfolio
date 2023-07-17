import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex-end',
          fontFamily: 'helvetica',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <header>
          <h1>Jacquelyn Suzette Pulliam</h1>
          <nav className="main-header-menu">
            <section
              style={{
                display: 'flex-left',
                fontFamily: 'helvetica',
                flexDirection: 'row',
                alignItems: 'flex-left',
                justifyContent: 'flex-left',
              }}
            >
              <div style={linkStyle}>
                <a href="#AboutMe">About Me</a>
              </div>
              <div style={linkStyle}>
                <a href="#Portfolio">Portfolio</a>
              </div>
              <div style={linkStyle}>
                <a href="#Resume">Resume</a>
              </div>
              <div style={linkStyle}>
                <a href="#Contact">Contact</a>
              </div>
            </section>
          </nav>
        </header>
      </section>
    </nav>
  )
}
