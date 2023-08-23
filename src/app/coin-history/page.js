import dynamic from 'next/dynamic';
import styles from './coinsHistory.module.css';
import HistoryList from './HistoryList';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Transactions = dynamic(() => import('@/components/transactions'));

export default function Page() {
  return (
    <Layout>
      <section className={styles.coinHistory}>
        {/* <Transactions /> */}
        <h1 className={styles.headingH1}>Coins History</h1>
        <HistoryList />
        <HistoryList />
        <HistoryList />
      </section>
    </Layout>
  );
}
