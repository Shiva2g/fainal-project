'use client';
import { useState, useEffect } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import NewsDetails from '../../components/NewsDetails/NewsDetails';
import styles from './page.module.css';
import { getDocs, collection } from 'firebase/firestore';
import db from '../db/firestore'; 

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'news'));
        const newsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setNewsList(newsData);
        
        // Set the first news item as default selected news
        if (newsData.length > 0) {
          setSelectedNews(newsData[0]);
        }
      } catch (error) {
        console.error("Error fetching news: ", error);
      }
    };

    fetchNews();
  }, []);

  // Handle news item click and scroll to top
  const handleNewsClick = (news) => {
    setSelectedNews(news);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
  };

  return (
    <main className={styles.main}>
      <div className={styles.newsPage}>
        <div className={styles.mainNews}>
          {selectedNews ? (
            <NewsDetails news={selectedNews} />
          ) : (
            <p>Please select a news item from the sidebar</p>
          )}
        </div>
        <div className={styles.sidebar}>
          {newsList.map((news) => (
            <NewsItem key={news.id} news={news} onClick={() => handleNewsClick(news)} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
