
import Link from "next/link";
import Image from "next/image";
import pageStyles from "./page.module.css";
import headerStyles from "./components/Header/Header.module.css";
import footerStyles from "./components/Footer/Footer.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
  
    <>
      <Header/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="back-button">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="hero-content">
          <div className="offer-details">
            <div className="heading2">Welcome to TechNest</div>
            <div className="heading1">Online Digital Shopping</div>
            <div className="heading4">
              Discover Incredible Deals on Electronics
            </div>
            <div className="heading1">
              Save up to $300 on select Products.
            </div>
            <div className="shop-buttons">
              <button className="shop-now">Shop Now</button>
              <button className="shop-all">Shop All</button>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/assets/images/products/hero-img.png" alt="Hero" />
          </div>
        </div>
        <div className="forward-button">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </section>

      <main className={styles.maincontainer}> 
        {/* Deals Section */}
        <section className="deals-section">
          <div className="deals-title">
            <div className="vertical-line-icon">
              <Image src="images/icons/vertical_line.png" alt="Deals Icon" />
            </div>
            <div className="last-pro-text">
              <h2>Deals</h2>
            </div>
            <div className="vertical-line-icon">
              <Image src="images/icons/vertical_line.png" alt="Deals Icon" />
            </div>
          </div>
          <div className="deals-item">
            <a href="#">
              <span className="material-symbols-outlined">laptop_mac</span>
              <p>Laptop</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">smartphone</span>
              <p>Smartphone</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">photo_camera</span>
              <p>Camera</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">stadia_controller</span>
              <p>Gaming Console</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">headset_mic</span>
              <p>HeadPhone</p>
            </a>
          </div>
        </section>

        {/* Main Content- latest-products */}
        <section className="latest-products">
          <div className="latest-products-title">
            <div className="vertical-line-icon">
              <Image src="images/icons/vertical_line.png" alt="Vertical Line" />
            </div>
            <div className="last-pro-text">
              <h2>Newest Arrivals</h2>
            </div>
          </div>
          <div className="product-grid">
            <div className="product-item">
              <div className="pro-image">
                <Image
                  src="images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp"
                  alt="ASUS Zenbook"
                />
                <div className="pro-like">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div>
                <p className="pro-title">ASUS Zenbook Duo (2024) UX8406</p>
                <p className="pro-info">
                  Revolutionary laptop with Apple's M2 chip for unparalleled
                  performance and battery life.
                </p>
                <div className="pro-rating">
                  <Image src="images/ratings/rating-35.png" alt="Rating" /> (58
                  Reviews)
                </div>
                <div className="sub-info-pro">
                  <div className="info-button">
                    <button>View Details</button>
                  </div>
                  <div className="info-price">
                    <p>Price $1,399</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat product-item div for other products */}
          </div>
        </section>

        {/* Add other sections similarly */}
      </main>
      <Footer/>
    </>
  );
};
    