import styles from '@/components/contest/quizList.module.css';

export default function Button({ className = styles.btnSmall, children }) {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
}
