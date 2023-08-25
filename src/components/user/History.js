import moment from 'moment/moment';
import QuizImage from '../ui/Image/QuizImage';
import CoinIcon from '@/components/coin';
import { formatNumber } from '@/utils';
import styles from './coinsHistory.module.css';

const config = {
  0: {
    title: 'Paid',
    class: 'paid',
  },
  1: {
    title: 'Earned',
    class: 'earned',
  },
};

export default function History({ transaction }) {
  const quizImage = transaction.image ? transaction.image : 'icon.png';

  return (
    <div className={styles.historyList}>
      <div className={styles.quizThumb}>
        <QuizImage
          name={transaction.name}
          imageName={quizImage}
          width={60}
          height={60}
        />
      </div>
      <div className={styles.quizNameDate}>
        <h4>{transaction.name}</h4>
        <span> {moment(transaction.date).format('MMMM Do YYYY')}</span>
      </div>
      <div className={styles.earnedPaidCoins}>
        <span
          className={`${styles.historyBedge} ${
            styles[config[transaction.transaction]['class']]
          }`}
        >
          {config[transaction.transaction]['title']}
        </span>
        <div className={styles.spaceTop}>
          <CoinIcon />
          {formatNumber(transaction.coins)}
        </div>
      </div>
    </div>
  );
}
