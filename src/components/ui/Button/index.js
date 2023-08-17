import Link from 'next/link';
import styles from '@/components/contest/quizList.module.css';

export default function Button({
  href,
  className = styles.btnSmall,
  children,
}) {
  return (
    <Link href={href} className={`${styles.btn} ${className}`}>
      {children}
    </Link>
  );
}
