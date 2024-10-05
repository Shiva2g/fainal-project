"use client";
import React, { useState } from 'react'; // اضافه کردن useState
import Image from "next/image";
import styles from "./PurchaseList.module.css";
import { useCart } from '../../context/CartContext'; 

const PurchaseList = ({ updateShippingCost, updateDeliveryDate }) => { // اضافه کردن updateDeliveryDate
  const { cart, addToCart, removeFromCart } = useCart();  

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({
    price: 4.99,
    date: 'Wednesday, September 15'
  });

  const handleDeliveryOptionChange = (price, date) => {
    const option = { price, date };
    setSelectedDeliveryOption(option);
    updateShippingCost(option.price); // به روز رسانی هزینه شیپینگ
    updateDeliveryDate(option.date); // به روز رسانی تاریخ تحویل
  };
  
  const handleDelete = (product) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this item from your cart?");
    if (isConfirmed) {
      removeFromCart(product); // حذف آیتم
    }
  };

  return (
    <div className={styles.purchaseListContainer}>
      {cart.map((product, index) => (
        <div className={styles.cartItemContainer} key={index}>
          <div className={styles.deliveryDate}>
            Delivery date: {selectedDeliveryOption.date}
          </div>

          <div className={styles.cartItemDetailsGrid}>
            <Image className={styles.productImage} src={product.image} alt={product.name} width={100} height={100}/>
            
            <div className={styles.cartItemDetails}>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productColor}>Color: {product.color}</div>
              <div className={styles.productQuantity}>
                Quantity: <span className={styles.quantityLabel}>{product.quantity}</span>
                <div className={styles.quantitySelector}>
                  <button className={styles.quantityBtn} onClick={() => removeFromCart(product)}>-</button>
                  <span>{product.quantity}</span>
                  <button className={styles.quantityBtn} onClick={() => addToCart(product)}>+</button>
                </div>
              </div>
              <div className={styles.productPrice}>Unit Price: ${product.price}</div>
              <button className={styles.deleteQuantity} onClick={() => handleDelete(product)}>
                Delete
              </button>
            </div>

            <div className={styles.deliveryOptions}>
              <div className={styles.deliveryOptionsTitle}>
                Choose a delivery option:
              </div>
              <div className={styles.deliveryOption}>
                <input 
                    type="radio" 
                    className={styles.deliveryOptionInput} 
                    name={`delivery-option-${index}`} 
                    onChange={() => handleDeliveryOptionChange(0, 'Thursday, September 21')}
                />
                <div>
                  <div className={styles.deliveryOptionDate}>
                    Thursday, September 21
                  </div>
                  <div className={styles.deliveryOptionPrice}>
                    FREE Shipping
                  </div>
                </div>
              </div>

              <div className={styles.deliveryOption}>
                <input 
                    type="radio" 
                    className={styles.deliveryOptionInput} 
                    name={`delivery-option-${index}`} 
                    defaultChecked 
                    onChange={() => handleDeliveryOptionChange(4.99, 'Wednesday, September 15')}
                />
                <div>
                  <div className={styles.deliveryOptionDate}>
                    Wednesday, September 15
                  </div>
                  <div className={styles.deliveryOptionPrice}>
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              
              <div className={styles.deliveryOption}>
                <input 
                    type="radio" 
                    className={styles.deliveryOptionInput} 
                    name={`delivery-option-${index}`} 
                    onChange={() => handleDeliveryOptionChange(9.99, 'Monday, September 13')}
                />
                <div>
                  <div className={styles.deliveryOptionDate}>
                    Monday, September 13
                  </div>
                  <div className={styles.deliveryOptionPrice}>
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseList;


// "use client";
// import React, { useState } from 'react'; // اضافه کردن useState
// import Image from "next/image";
// import styles from "./PurchaseList.module.css";
// import { useCart } from '../../context/CartContext'; 

// const PurchaseList = ({ updateShippingCost }) => {
//   // دریافت اطلاعات سبد خرید از کانتکست
//   const { cart, addToCart, removeFromCart } = useCart();  

//   // State برای نگه‌داری گزینه انتخاب شده توسط کاربر
//   const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({
//     price: 4.99,
//     date: 'Wednesday, September 15'
//   });

//   // تابع برای تنظیم گزینه انتخاب شده
//   const handleDeliveryOptionChange = (option) => {
//     setSelectedDeliveryOption(option);
//     updateShippingCost(option.price); // به روز رسانی هزینه شیپینگ
//     updateDeliveryDate(option.date); // به روز رسانی تاریخ تحویل
//   };
  
//   // تابع برای حذف آیتم با تأیید کاربر
//   const handleDelete = (product) => {
//     const isConfirmed = window.confirm("Are you sure you want to remove this item from your cart?");
//     if (isConfirmed) {
//       removeFromCart(product); // حذف آیتم
//     }
//   };

//   return (
//     <div className={styles.purchaseListContainer}>
//       {/* چرخش روی آیتم‌های سبد خرید */}
//       {cart.map((product, index) => (
//         <div className={styles.cartItemContainer} key={index}>
//           <div className={styles.deliveryDate}>
//             Delivery date: {selectedDeliveryOption.date}
//           </div>

//           <div className={styles.cartItemDetailsGrid}>
//             {/* تصویر محصول */}
//             <Image className={styles.productImage} src={product.image} alt={product.name} width={100} height={100}/>
            
//             <div className={styles.cartItemDetails}>
//               <div className={styles.productName}>{product.name}</div>
//               <div className={styles.productColor}>Color: {product.color}</div>
//               <div className={styles.productQuantity}>
//                 Quantity: <span className={styles.quantityLabel}>{product.quantity}</span>
//                 <div className={styles.quantitySelector}>
//                   {/* تغییر تعداد محصولات */}
//                   <button className={styles.quantityBtn} onClick={() => removeFromCart(product)}>-</button>
//                   <span>{product.quantity}</span>
//                   <button className={styles.quantityBtn} onClick={() => addToCart(product)}>+</button>
//                 </div>
//               </div>
//               <div className={styles.productPrice}>Unit Price: ${product.price}</div>
//                {/* دکمه حذف آیتم */}
//               <button className={styles.deleteQuantity} onClick={() => handleDelete(product)}>
//                 Delete
//               </button>
//             </div>

//             {/* گزینه‌های تحویل */}
//             <div className={styles.deliveryOptions}>
//               <div className={styles.deliveryOptionsTitle}>
//                 Choose a delivery option:
//               </div>
//               <div className={styles.deliveryOption}>
//               <input 
//                   type="radio" 
//                   className={styles.deliveryOptionInput} 
//                   name={`delivery-option-${index}`} 
//                   onChange={() => handleDeliveryOptionChange(0, 'Thursday, September 21')}
//                 />
//                 <div>
//                   <div className={styles.deliveryOptionDate}>
//                     Thursday, September 21
//                   </div>
//                   <div className={styles.deliveryOptionPrice}>
//                     FREE Shipping
//                   </div>
//                 </div>
//               </div>

//               <div className={styles.deliveryOption}>
//               <input 
//                   type="radio" 
//                   className={styles.deliveryOptionInput} 
//                   name={`delivery-option-${index}`} 
//                   defaultChecked 
//                   onChange={() => handleDeliveryOptionChange(4.99, 'Wednesday, September 15')}
//                 />
//                 <div>
//                   <div className={styles.deliveryOptionDate}>
//                     Wednesday, September 15
//                   </div>
//                   <div className={styles.deliveryOptionPrice}>
//                     $4.99 - Shipping
//                   </div>
//                 </div>
//               </div>
              
//               <div className={styles.deliveryOption}>
//               <input 
//                   type="radio" 
//                   className={styles.deliveryOptionInput} 
//                   name={`delivery-option-${index}`} 
//                   onChange={() => handleDeliveryOptionChange(9.99, 'Monday, September 13')}
//                 />
//                 <div>
//                   <div className={styles.deliveryOptionDate}>
//                     Monday, September 13
//                   </div>
//                   <div className={styles.deliveryOptionPrice}>
//                     $9.99 - Shipping
//                   </div>
//                 </div>
//               </div>
            
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PurchaseList;
