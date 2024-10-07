import styles from './NewsItem.module.css';

const NewsItem = ({ news, onClick }) => {
  return (
    <div className={styles.newsItem} onClick={() => onClick(news)}>
      <img src={news.image} alt={news.title} className={styles.image} />
      <h3 className={styles.title}>{news.title}</h3>
      <p className={styles.summary}>{news.summary}</p>
    </div>
  );
};

export default NewsItem;