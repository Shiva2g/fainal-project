import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.topHeader}>
        <div className={Styles.logo}>
          <a href="#">
            <Image className={Styles.myLogo} src="/assets/images/logo1.png" width={155} height={50} alt="Logo" />
          </a>
        </div>
        <div className={Styles.searchBar}>
          <input type="text" placeholder="Search for products..." />
          <button type="submit">
            <Image className={Styles.iconSearch} src="/assets/images/icons/search-icon.png" width={30} height={30} alt="Search" />
            <div className={Styles.tooltip}>Search</div>
          </button>
        </div>
        <div className={Styles.headerIcons}>
          <a href="#">
            <Image src="/assets/images/icons/shopping_cart.png" className={Styles.shoppingCart} width={30} height={30} alt="Cart" /> Cart
          </a>
          <a href="#">
            <Image src="/assets/images/icons/account.png" className={Styles.account} width={30} height={30} alt="Account" /> Account
          </a>
        </div>
      </div>
      {/* Nav bar Section */}
      <nav className={Styles.nav}>
        <ul>
          <li>
            <a href="#">
              <Image src="/assets/images/icons/menu.png" className={Styles.menuIco} width={30} height={30} alt="Menu" />
            </a>
          </li>
          <li className={Styles.dropdown}>
            <a href="#">Products</a>
            <div className={Styles.dropdownContent}>
              <a href="#">Mobile & Accessories</a>
              <hr />
              <a href="#">Laptops & Accessories</a>
              <hr />
              <a href="#">Cameras & Photography</a>
              <hr />
              <a href="#">Gaming & Accessories</a>
              <hr />
              <a href="#">HeadPhone</a>
            </div>
          </li>
          <li><a href="compare">Compare & Analyze</a></li>
          <li><a href="#">Tech News</a></li>
          <li><a href="#">Deals</a></li>
          <li><a href="aboutUs">About Us</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
