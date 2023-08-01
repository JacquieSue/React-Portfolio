import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerStyle: {
        background: '#6472f2',
        padding: '0 20px',
    },
};

function Footer() {
    return (
        <footer style={styles.footerStyle} className='footer'>
            <h1>otw</h1>
        </footer>
    );
}

export default Footer;