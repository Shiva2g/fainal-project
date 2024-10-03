import {CartProvider} from "../context/CartContext";
import "./globals.css";
import {Inter} from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserSessionProvider from "./_providers/user-session-provider";

const inter = Inter ({
  display:"swap",
  weight:["100","200","300","400","500","700","900"], 
  subsets:["latin"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className= {inter.className}>
        <UserSessionProvider>  
        <CartProvider>
        <Header />
        {children}
        <Footer /> 
        </CartProvider>
        </UserSessionProvider>
      </body>
    </html>
  );
}
