import React from 'react';
import Styles from './CompareSection.module.css';

const CompareSection = ({ comparisonData }) => {
  return (
    <div className={Styles.comparisonTable}>
      {comparisonData && comparisonData.length === 2 && (
        <div className={Styles.comparisonGrid}>
          {/* Column for the first product */}
          <div className={Styles.compareColumn}>
            <h3>{comparisonData[0].name}</h3>
            {/* Add your specs here */}
          </div>

          {/* Column for the second product */}
          <div className={Styles.compareColumn}>
            <h3>{comparisonData[1].name}</h3>
            {/* Add your specs here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareSection;



// CompareSection.js
// import React from 'react';
// import CompareBox from '../../components/CompareBox/CompareBox';

// const CompareSection = ({ selectedProducts }) => {
//   return (
//     <div>
//       {selectedProducts.length === 2 && (
//         <div className="comparisonTable">
//           <div className="comparisonGrid">
//             {selectedProducts.map(product => (
//               <CompareBox 
//                 key={product.id} 
//                 image={product.image} 
//                 name={product.name} 
//                 description={product.description} 
//                 price={product.price} 
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompareSection;



// import React from 'react';
// import Styles from './CompareSection.module.css';

// const CompareSection = () => {
//   return (
//     <div className={Styles.comparisonTable}>
//       <div className={Styles.comparisonGrid}>
//         {/* ستون اول محصول */}
//         <div className={Styles.compareColumn}>
//           <div className={Styles.compareHeader}>
//             <h3>Asus Vivobook S 14 OLED 2024</h3>
//             <button className={Styles.closeBtn}>X</button>
//           </div>
//           <div className={Styles.compareSection}>
//             <h4>Key Specs</h4>
//             <div className={Styles.specItem}>
//               <span>Display size</span>
//               <span>14.00-inch</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Display resolution</span>
//               <span>3200x2000 pixels</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Processor</span>
//               <span>Ryzen 5</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>RAM</span>
//               <span>16GB</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>OS</span>
//               <span>Windows 11</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>SSD</span>
//               <span>1TB</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Weight</span>
//               <span>1.30 kg</span>
//             </div>
//           </div>

//           <div className={Styles.compareSection}>
//             <h4>General</h4>
//             <div className={Styles.specItem}>
//               <span>Brand</span>
//               <span>Asus</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Model</span>
//               <span>Vivobook S 14 OLED 2024</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Release date</span>
//               <span>May 21, 2024</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Launched in Canada</span>
//               <span>Yes</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Model Number</span>
//               <span>M5406NA-QD551WS</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Battery Capacity</span>
//               <span>75Wh</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Warranty</span>
//               <span>1 Year</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Color</span>
//               <span>Silver</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Price</span>
//               <span>$999</span>
//             </div>
//           </div>
//         </div>

//         {/* ستون دوم محصول */}
//         <div className={Styles.compareColumn}>
//           <div className={Styles.compareHeader}>
//             <h3>Asus ROG Zephyrus G16 (2024)</h3>
//             <button className={Styles.closeBtn}>X</button>
//           </div>
//           <div className={Styles.compareSection}>
//             <h4>Key Specs</h4>
//             <div className={Styles.specItem}>
//               <span>Display size</span>
//               <span>16.00-inch</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Display resolution</span>
//               <span>2560x1600 pixels</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Processor</span>
//               <span>Core i9</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>RAM</span>
//               <span>48GB</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>OS</span>
//               <span>Windows 11 Pro</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>SSD</span>
//               <span>2TB</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Weight</span>
//               <span>1.85 kg</span>
//             </div>
//           </div>

//           <div className={Styles.compareSection}>
//             <h4>General</h4>
//             <div className={Styles.specItem}>
//               <span>Brand</span>
//               <span>Asus</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Model</span>
//               <span>ROG Zephyrus G16 (2024)</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Release date</span>
//               <span>February 14, 2024</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Launched in Canada</span>
//               <span>Yes</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Model Number</span>
//               <span>GU605</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Battery Capacity</span>
//               <span>90Wh</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Warranty</span>
//               <span>2 Years</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Color</span>
//               <span>Black</span>
//             </div>
//             <div className={Styles.specItem}>
//               <span>Price</span>
//               <span>$1799</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompareSection;
