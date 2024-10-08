"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Styles from "./Header.module.css";
import { useCart } from '../../context/CartContext'; 
import { signOut, signIn,  useSession } from "next-auth/react"; //auth

const Header = () => {
  const {data} = useSession();  //auth
  const { cart } = useCart(); // Use the useCart hook to get the cart
  const totalQuantity = cart?.reduce((total, item) => total + item.quantity, 0) || 0; // Calculate total quantity

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
          <div className={Styles.notification}>
          <Image src="/assets/images/icons/shopping_cart.png" className={Styles.shoppingCart} width={30} height={30} alt="Cart" /> 
          <div className={Styles.notificationCount}>
          <span> {totalQuantity}</span> {/* Show quantity  */} 
          </div>
          </div>  
          </Link> &nbsp;&nbsp;

          {/* <Link href="/signIn" passHref>
            <Image src="/assets/images/icons/account.png" className={Styles.account} width={30} height={25} alt="Account" />  */}
            
            {/* ault  */}         
            <div className={Styles.account}> 
              {data ? (<div className={Styles.user_name}>
              <span> {data.user.name}</span> &nbsp;
              <Image className={Styles.accountImage} src={data.user.image} width={30} height={30} alt='profile picture' /> &nbsp;
              <button onClick={() => signOut()}>Sign Out</button>
              </div>
              ) : (<div>
              
                <button onClick={() => signIn()}>Sign In</button>
              </div>)}
            </div>

          {/* </Link> */}
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
            <Link href={{pathname:'/search' , query:{productType:'mobile'}}}> Mobile & Accessories</Link>
              <hr />
              <Link href={{pathname:'/search' , query:{productType:'laptop'}}}>Laptops & Accessories</Link>
              <hr />
              <Link href={{pathname:'/search' , query:{productType:'camera'}}}>Cameras & Photography</Link>
              <hr />
              <Link href={{pathname:'/search' , query:{productType:'Gaming'}}}>Gaming Consoles</Link>
              <hr />
              <Link href={{pathname:'/search' , query:{productType:'headphone'}}}>HeadPhone</Link>
            </div>
          </li>
          <li><Link href="/compare">Compare & Analyze</Link></li>
          <li><Link href="/techNews">Tech News</Link></li>
          <li><Link href="#">Deals</Link></li>
          <li><Link href="/aboutUs">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
