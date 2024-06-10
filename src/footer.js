import React from 'react';

const Footer = (props) => {
  return (
    <footer id='footer' style={footerStyle}>
    <p > Made with ❤️ by <a className='text-white underline hover:text-green-300' href='https://github.com/atulsharma101'rel="noreferrer" target='_blank'>atulsharma101</a></p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'rgb(80 143 223)',
  color:'white',
  padding: '2rem',
  textAlign: 'center',
  width: '100%',
  bottom:'0',
  position:'Fixed'
};

export default Footer;
