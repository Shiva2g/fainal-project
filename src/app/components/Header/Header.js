
import React from 'react';
import Image from "next/image";
import headerStyles from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.headerc}>
      <div className="top-header">
        <div className="logo">
          <a href="index.html">
            <Image className="my-logo" src="assets/images/logo1.png" alt="Logo" />
          </a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button type="submit">
            <Image className="icon-search" src="images/icons/search-icon.png" alt="Search" />
            <div className="tooltip">Search</div>
          </button>
        </div>
        <div className="header-icons">
          <a href="checkout.html">
            <Image src="images/icons/shopping_cart.png" className="shopping-cart" alt="Cart" /> Cart
          </a>
          <a href="sign-in.html">
            <Image src="images/icons/account.png" className="account" alt="Account" /> Account
          </a>
        </div>
      </div>
      {/* Nav bar Section */}
      <nav className={headerStyles.nav}>
        <ul>
          <li>
            <a href="#">
              <Image src="images/icons/menu.png" className="menu-ico" alt="Menu" />
            </a>
          </li>
          <li className="dropdown">
            <a href="#">Products</a>
            <div className="dropdown-content">
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
          <li><a href="compare.html">Compare & Analyze</a></li>
          <li><a href="#">Smart Picks</a></li>
          <li><a href="#">Tech News</a></li>
          <li>
            <a href="#">Deals</a>
            <div className="dropdown-content">
              <a href="#">Laptop</a>
              <hr />
              <a href="#">Mobile</a>
              <hr />
              <a href="#">Cameras</a>
              <hr />
              <a href="#">Gaming</a>
              <hr />
              <a href="#">HeadPhone</a>
            </div>
          </li>
          <li><a href="about-us.html">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
