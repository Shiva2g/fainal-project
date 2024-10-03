import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    
    <header className={Styles.header}>
      <div className={Styles.topHeader}>
        <div className={Styles.logo}>
          <Link href="/">
            <Image className={Styles.myLogo} src="/assets/images/logo1.png" width={155} height={155} alt="Logo" />
          </Link>
        </div>
        <div className={Styles.searchBar}>
          <input type="text" placeholder="Search for products..." />
          <button type="submit">
            <Image className={Styles.iconSearch} src="/assets/images/icons/search-icon.png" width={30} height={30} alt="Search" />
            <div className={Styles.tooltip}>Search</div>
          </button>
        </div>
        <div className={Styles.headerIcons}>
          <Link href="/checkOut" passHref>
            <Image src="/assets/images/icons/shopping_cart.png" className={Styles.shoppingCart} width={30} height={30} alt="Cart" /> 
            <span>Cart</span>
          </Link> &nbsp;&nbsp;
          <Link href="/signIn" passHref>
            <Image src="/assets/images/icons/account.png" className={Styles.account} width={30} height={25} alt="Account" /> Sign In
          </Link>
        </div>
      </div>

      {/* Nav bar Section */}
      <nav className={Styles.nav}>
        <ul>
          <li>
            <Link href="#">
              <Image src="/assets/images/icons/menu.png" className={Styles.menuIco} width={30} height={30} alt="Menu" />
            </Link>
          </li>
          <li className={Styles.dropdown}>
            <Link href="/products">Products</Link>
            <div className={Styles.dropdownContent}>
              <Link href="/search">Mobile & Accessories</Link>
              <hr />
              <Link href="/search">Laptops & Accessories</Link>
              <hr />
              <Link href="/search">Cameras & Photography</Link>
              <hr />
              <Link href="/search">Gaming Consoles</Link>
              <hr />
              <Link href="/search">HeadPhone</Link>
            </div>
          </li>
          <li><Link href="/compare">Compare & Analyze</Link></li>
          <li><Link href="#">Tech News</Link></li>
          <li><Link href="#">Deals</Link></li>
          <li><Link href="/aboutUs">About Us</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
