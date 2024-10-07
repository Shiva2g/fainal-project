// components/CustomerReviews.js
import React, { useState } from 'react';
import styles from './CustomerReviews.module.css';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText) {
      setReviews([...reviews, reviewText]);
      setReviewText('');
    }
  };

  return (
    <div className={styles.customerReviews}>
      <h3>Customer Reviews</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerReviews;
