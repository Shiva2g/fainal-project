"use client";

import React from 'react';
import Image from "next/image";
import styles from "./CompareBox.module.css";

const CompareBox = ({ product }) => {
  const { image, name, description, price } = product || {};

  return (
    <div className={styles.productItem}>
      {product ? (
        <>
          <div className={styles.proImage}>
            <Image
              src={image}
              width={200}
              height={200}
              alt={name}  // استفاده از نام محصول به عنوان alt
            />
            <div className={styles.proClose}>
              <span className={`${styles.icon} material-symbols-outlined`}>
                close
              </span>
            </div>
          </div>
          <div>
            <p className={styles.proTitle}>{name}</p>
            <p className={styles.proInfo}>{description}</p>
          </div>
          <div className={styles.proRating}>
            <Image src="/assets/images/ratings/rating-35.png" width={65} height={15} alt="Rating" /> (58 Reviews)
          </div>
          <div className={styles.subInfoPro}>
            <div className={styles.infoButton}>
              <button>View Details</button>
            </div>
            <div className={styles.infoPrice}>
              <p>Price ${price}</p>
            </div>
          </div>
        </>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default CompareBox;


// import React from 'react';
// import Image from "next/image";
// import styles from "./CompareBox.module.css";

// const CompareBox = ({ product }) => {
//   const { image, name, description, price, store, imageTwo, imageThree, imageFour } = product || {};

//   return (
//     <div className={styles.productItem}>
//       {product ? (
//         <>
//           <div className={styles.proImage}>
//             <Image
//               src={image} 
//               width={200} 
//               height={200}
//               alt="Product Image"
//             />
//             <div className={styles.proClose}>
//               <span className={`${styles.icon} material-symbols-outlined`}>
//                 close
//               </span>
//             </div>
//           </div>
//           <div>
//             <p className={styles.proTitle}>{name}</p>
//             <p className={styles.proInfo}>{description}</p>
//           </div>
//           <div className={styles.proRating}>
//             <Image src="/assets/images/ratings/rating-35.png" width={65} height={15} alt="Rating" /> (58 Reviews)
//           </div>
//           <div className={styles.subInfoPro}>
//             <div className={styles.infoButton}>
//               <button>View Details</button>
//             </div>
//             <div className={styles.infoPrice}>
//               <p>Price ${price}</p>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p>No product selected</p>
//       )}
//     </div>
//   );
// };

// export default CompareBox;
