import styles from './NewsDetails.module.css';

const NewsDetails = ({ news }) => {
  return (
    <div className={styles.newsDetails}>
      <img src={news.image} alt={news.title} className={styles.image} />
      <h1 className={styles.title}>{news.title}</h1>
      <p className={styles.content}>{news.content}</p>
    </div>
  );
};

export default NewsDetails;
