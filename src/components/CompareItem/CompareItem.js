import React from 'react';
import Image from "next/image";
import Styles from "./CompareItem.module.css";

const CompareItem = ({ product, onSelect }) => {
  const handleClick = () => {
    onSelect(product);
  };

  return (
    <div className={Styles.compareItem} onClick={handleClick}>
      <Image
        src={product.image}
        alt={product.name}
        width={100}
        height={100}
        className={Styles.compareIcon}
      />
      <span>{product.name}</span>
      <button className={Styles.addButton}>+</button>
    </div>
  );
};

export default CompareItem;







// import React from 'react';
// import Image from "next/image";
// import Styles from "./CompareItem.module.css";

// const CompareItem = ({ product, onSelect }) => {
//   const handleClick = () => {
//     onSelect(product);
//   };

//   return (
//     <div className={Styles.compareItem} onClick={handleClick}>
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={100}
//         height={100}
//         className={Styles.compareIcon}
//       />
//       <span>{product.name}</span>
//       <button className={Styles.addButton}>+</button>
//     </div>
//   );
// };

// export default CompareItem;





// import React from 'react';
// import Image from "next/image";
// import Styles from "./CompareItem.module.css";

// const CompareItem = ({ product, onSelect }) => {
//   const handleAddProduct = () => {
//     onSelect(product);
//   };

//   return (
//     <div className={Styles.compareItem}>
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={100}
//         height={100}
//         className={Styles.compareIcon}
//       />
//       <span>{product.name}</span>
//       <button className={Styles.addButton} onClick={handleAddProduct}>+</button>
//     </div>
//   );
// };

// export default CompareItem;
