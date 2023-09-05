import Link from 'next/link';
import QuizImage from '@/components/ui/Image/QuizImage';
import styles from './blogList.module.css';
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function Item({ blog }) {
  const createdAt = new Date(blog.createdAt);
  const date = String(createdAt.getDate()).padStart(2, '0');
  const month = monthNames[createdAt.getMonth()];
  const year = String(createdAt.getFullYear()).substring(2, 4);

  return (
    <div className={styles.quizList}>
      <div className={styles.quizCard}>
        <Link href={`/blog/${blog.slug}`}>
          <div className={styles.cardContent}>
            <div className={styles.thumbnialImg}>
              <QuizImage
                width="80"
                height="80"
                name={blog.title}
                imageName={blog.imageSmall}
              />
            </div>
            <div className={styles.quizNameStatus}>
              <div className={styles.categoryLiveDiv}>
                <span
                  className={styles.categories}
                >{`Published on ${date} ${month} ${year}`}</span>
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
