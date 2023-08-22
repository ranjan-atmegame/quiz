import Link from 'next/link';
import QuizImage from '@/components/ui/Image/QuizImage';
import styles from './blogList.module.css';

export default function Item({ blog }) {
  return (
    <div className={styles.quizList}>
      <div className={styles.quizCard}>
        <Link href={`/blog/${blog.title}`}>
          <div className={styles.cardContent}>
            <div className={styles.thumbnialImg}>
              <QuizImage
                width="80"
                height="80"
                name={blog.title}
                imageName={blog.image}
              />
            </div>
            <div className={styles.quizNameStatus}>
              <div className={styles.categoryLiveDiv}>
                <span
                  className={styles.categories}
                >{`Published on 18 Aug 23`}</span>
                <span className={styles.statusLive}>New</span>
              </div>
              <h3>{blog.title}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
