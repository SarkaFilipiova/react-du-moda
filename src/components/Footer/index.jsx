import React from 'react';
import './style.css';



const Footer = ({year, author}) => {
    return (
      <footer class="footer">
        <p class="footer__copyright">&copy; 2022, Czechitas</p>
        <p class="footer__disclosure">Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.</p>
      </footer>
    )
};

export default Footer;